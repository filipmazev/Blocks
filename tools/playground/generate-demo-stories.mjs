import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { ESLint } from 'eslint';
import { format, resolveConfig } from 'prettier';
import ts from 'typescript';

import { formatGeneratedTypeScript } from '../helpers/generated-typescript.helpers.mjs';

const root = fileURLToPath(new URL('../../', import.meta.url));
const generated = 'projects/playground/src/app/generated/demo-stories';
const templateLint = new ESLint({ cwd: root, fix: true });
const catalogPath = 'projects/playground/src/app/components/screens/library-components/component-demo/constants/component-catalog.constants.ts';
const recipesPath = 'projects/playground/src/app/shared/constants/demo-recipes.constants.ts';
const config = ts.readConfigFile(path.join(root, 'tsconfig.json'), ts.sys.readFile);
const options = ts.parseJsonConfigFileContent(config.config, ts.sys, root).options;
const entryPoints = ['forms', 'primitives', 'icons', 'navigation', 'modal', 'toastr', 'effects'];
const adapters = {
  modal: 'projects/playground/src/app/components/screens/library-components/modal/modal.ts',
  toast: 'projects/playground/src/app/components/screens/library-components/toastr/toastr.ts'
};
const program = ts.createProgram(
  [...entryPoints.map((entry) => path.join(root, `projects/blocks/${entry}/public-api.ts`)), ...Object.values(adapters).map((file) => path.join(root, file))],
  options
);
const checker = program.getTypeChecker();
const unresolved = Symbol('unresolved');

function literal(node, seen = new Set()) {
  if (!node) return undefined;
  if (ts.isAsExpression(node) || ts.isSatisfiesExpression(node) || ts.isParenthesizedExpression(node)) return literal(node.expression, seen);
  if (ts.isStringLiteralLike(node)) return node.text;
  if (ts.isNumericLiteral(node)) return Number(node.text);
  if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (node.kind === ts.SyntaxKind.NullKeyword) return null;
  if (ts.isPrefixUnaryExpression(node) && node.operator === ts.SyntaxKind.MinusToken) return -Number(literal(node.operand, seen));
  if (ts.isArrayLiteralExpression(node)) {
    const values = node.elements.map((element) => literal(element, seen));
    return values.includes(unresolved) ? unresolved : values;
  }
  if (ts.isObjectLiteralExpression(node)) {
    const result = {};
    for (const property of node.properties) {
      if (!ts.isPropertyAssignment(property)) return unresolved;
      const value = literal(property.initializer, seen);
      if (value === unresolved) return unresolved;
      result[property.name.text] = value;
    }
    return result;
  }
  if (ts.isIdentifier(node) && node.text === 'undefined') return undefined;
  if (ts.isIdentifier(node) || ts.isPropertyAccessExpression(node)) {
    let symbol = checker.getSymbolAtLocation(node);
    if (symbol?.flags & ts.SymbolFlags.Alias) symbol = checker.getAliasedSymbol(symbol);
    if (!symbol || seen.has(symbol)) return unresolved;
    const next = new Set([...seen, symbol]);
    const declaration = symbol.valueDeclaration;
    if (declaration && 'initializer' in declaration) return literal(declaration.initializer, next);
  }
  return unresolved;
}

async function readConstant(file, name) {
  const source = ts.createSourceFile(file, await readFile(path.join(root, file), 'utf8'), ts.ScriptTarget.Latest, true);
  const declaration = source.statements
    .filter(ts.isVariableStatement)
    .flatMap((statement) => [...statement.declarationList.declarations])
    .find((entry) => entry.name.getText(source) === name);
  const value = literal(declaration?.initializer);
  if (value === unresolved || !value) throw new Error(`Cannot read literal ${name} in ${file}.`);
  return value;
}

function findClass(packageName, name) {
  const entry = packageName.split('/').at(-1);
  const source = program.getSourceFile(path.join(root, `projects/blocks/${entry}/public-api.ts`));
  const module = source && checker.getSymbolAtLocation(source);
  let symbol = module && checker.getExportsOfModule(module).find((value) => value.name === name);
  if (symbol?.flags & ts.SymbolFlags.Alias) symbol = checker.getAliasedSymbol(symbol);
  const declaration = symbol?.declarations?.find(ts.isClassDeclaration);
  if (!declaration) throw new Error(`No public class ${name} in ${packageName}.`);
  return {
    declaration,
    type: checker.getTypeAtLocation(declaration),
    name: `${name}${declaration.typeParameters?.length ? `<${declaration.typeParameters.map(() => 'unknown').join(', ')}>` : ''}`
  };
}

function propertiesOf(owner) {
  const properties = [];
  for (const symbol of checker.getPropertiesOfType(owner.type)) {
    const node = symbol.valueDeclaration;
    if (!node || ts.getCombinedModifierFlags(node) & (ts.ModifierFlags.Private | ts.ModifierFlags.Protected | ts.ModifierFlags.Static)) continue;
    const name = symbol.name;
    if (name.startsWith('ng')) continue;
    const call = node.initializer && ts.isCallExpression(node.initializer) ? node.initializer : undefined;
    const initializer = call?.expression.getText() ?? '';
    const kind = /^(input|model)(\.required)?$/.test(initializer)
      ? initializer.split('.')[0]
      : initializer === 'output'
        ? 'output'
        : ts.isMethodDeclaration(node)
          ? 'method'
          : 'property';
    const type = checker.getTypeOfSymbolAtLocation(symbol, node);
    const valueType = kind === 'input' || kind === 'model' ? (type.getCallSignatures()[0]?.getReturnType() ?? type) : type;
    const union = valueType.isUnion() ? valueType.types : [valueType];
    const nonnull = union.filter((item) => !(item.flags & (ts.TypeFlags.Undefined | ts.TypeFlags.Null)));
    const choices = nonnull.every((item) => item.isStringLiteral() || item.isNumberLiteral() || item.flags & ts.TypeFlags.Object)
      ? nonnull.filter((item) => item.isStringLiteral() || item.isNumberLiteral()).map((item) => item.value)
      : undefined;
    const text = nonnull.some((item) => item.flags & (ts.TypeFlags.StringLike | ts.TypeFlags.TemplateLiteral));
    const number = nonnull.every((item) => item.flags & ts.TypeFlags.NumberLike || (item.isStringLiteral() && /^\d+$/.test(item.value)));
    const boolean = nonnull.every((item) => item.flags & ts.TypeFlags.BooleanLike);
    const required = initializer.endsWith('.required');
    const defaultNode = required ? undefined : call?.arguments[0];
    const defaultValue = literal(defaultNode);
    const setting = call?.arguments[required ? 0 : 1];
    const alias = setting && ts.isObjectLiteralExpression(setting) ? setting.properties.find((property) => property.name?.getText() === 'alias') : undefined;
    const binding = alias && ts.isPropertyAssignment(alias) ? literal(alias.initializer) : name;
    let editor =
      kind === 'input' || kind === 'model'
        ? boolean
          ? 'boolean'
          : choices?.length
            ? 'select'
            : number
              ? 'number'
              : text
                ? 'text'
                : 'documentation'
        : 'documentation';
    if (defaultValue === unresolved) editor = 'documentation';
    properties.push({
      name,
      binding,
      kind,
      type: checker.typeToString(valueType),
      description: ts.displayPartsToString(symbol.getDocumentationComment(checker)),
      defaultExpression: defaultNode?.getText() ?? (required ? 'Required' : 'undefined'),
      defaultValue: defaultValue === unresolved ? undefined : defaultValue,
      options: choices,
      editor,
      required,
      nullable: union.some((item) => item.flags & ts.TypeFlags.Null),
      optional: union.some((item) => item.flags & ts.TypeFlags.Undefined)
    });
  }
  return properties;
}

async function write(target, source, typescript = true) {
  const file = path.join(root, target);
  if (target.endsWith('.html')) {
    const [result] = await templateLint.lintText(source, { filePath: file });
    if (result.errorCount) throw new Error(`Invalid generated template ${target}: ${result.messages.map((message) => message.message).join('; ')}`);
    source = result.output ?? source;
  }
  const formatted = typescript ? await formatGeneratedTypeScript(source, target) : await format(source, { ...(await resolveConfig(file)), filepath: file });
  const previous = await readFile(file, 'utf8').catch(() => undefined);
  if (previous === formatted) return;
  if (process.argv.includes('--check')) throw new Error(`Outdated ${target}. Run npm run tools:generate:demo-stories.`);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, formatted);
}

function valueSchema(type, seen = new Set()) {
  if (seen.has(type) || type.flags & (ts.TypeFlags.Any | ts.TypeFlags.Unknown | ts.TypeFlags.TypeParameter)) return { kind: 'unknown' };
  const next = new Set([...seen, type]);
  if (type.isUnion()) return { kind: 'union', choices: type.types.map((item) => valueSchema(item, next)) };
  if (type.isStringLiteral() || type.isNumberLiteral()) return { kind: 'literal', value: type.value };
  if (type.flags & ts.TypeFlags.StringLike) return { kind: 'string' };
  if (type.flags & ts.TypeFlags.NumberLike) return { kind: 'number' };
  if (type.flags & ts.TypeFlags.BooleanLike) return { kind: 'boolean' };
  if (type.flags & ts.TypeFlags.Null) return { kind: 'null' };
  if (type.flags & ts.TypeFlags.Undefined) return { kind: 'undefined' };
  if (type.getCallSignatures().length || ['TemplateRef', 'ElementRef', 'HTMLElement', 'Date', 'RegExp'].includes(type.symbol?.name))
    return { kind: 'unsupported' };
  if (checker.isArrayType(type) || checker.isTupleType(type)) return { kind: 'array', item: valueSchema(type.getNumberIndexType(), next) };
  const members = checker.getPropertiesOfType(type);
  return {
    kind: 'object',
    properties: Object.fromEntries(
      members.map((member) => [
        member.name,
        valueSchema(checker.getTypeOfSymbolAtLocation(member, member.valueDeclaration ?? member.declarations?.[0] ?? program.getSourceFiles()[0]), next)
      ])
    ),
    required: members.filter((member) => !(member.flags & ts.SymbolFlags.Optional)).map((member) => member.name),
    additional: type.getStringIndexType() ? valueSchema(type.getStringIndexType(), next) : undefined
  };
}

function argumentProperty(symbol, type, defaultValue, prefix = '') {
  const union = type.isUnion() ? type.types : [type];
  const nonnull = union.filter((item) => !(item.flags & (ts.TypeFlags.Undefined | ts.TypeFlags.Null)));
  const choices = nonnull.every((item) => item.isStringLiteral() || item.isNumberLiteral()) ? nonnull.map((item) => item.value) : undefined;
  const editor = choices?.length
    ? 'select'
    : nonnull.every((item) => item.flags & ts.TypeFlags.BooleanLike)
      ? 'boolean'
      : nonnull.every((item) => item.flags & ts.TypeFlags.NumberLike)
        ? 'number'
        : nonnull.some((item) => item.flags & ts.TypeFlags.String)
          ? 'text'
          : 'documentation';
  return {
    name: prefix + symbol.name,
    binding: prefix + symbol.name,
    kind: 'input',
    type: checker.typeToString(type),
    description: ts.displayPartsToString(symbol.getDocumentationComment(checker)),
    defaultExpression: defaultValue === undefined ? 'See API documentation' : JSON.stringify(defaultValue),
    defaultValue,
    options: choices,
    editor,
    required: !union.some((item) => item.flags & (ts.TypeFlags.Null | ts.TypeFlags.Undefined)),
    nullable: union.some((item) => item.flags & ts.TypeFlags.Null),
    optional: union.some((item) => item.flags & ts.TypeFlags.Undefined)
  };
}

async function serviceStory(entry, recipe) {
  const adapter = recipe.adapter;
  const sourceFile = program.getSourceFile(path.join(root, adapters[adapter]));
  const declaration = sourceFile.statements.find(ts.isClassDeclaration);
  const input = declaration.members.find((member) => member.name?.getText() === 'args');
  const argsType = checker.getTypeAtLocation(input).getCallSignatures()[0].getReturnType();
  const defaults = await readConstant(`projects/playground/src/app/shared/constants/${adapter}-story.constants.ts`, `${adapter.toUpperCase()}_STORY_DEFAULTS`);
  const args = { ...defaults, ...recipe.args };
  const properties = checker.getPropertiesOfType(argsType).map((symbol) => {
    const property = argumentProperty(symbol, checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration), args[symbol.name]);
    if (recipe.json?.includes(property.name)) {
      property.editor = 'json';
      property.schema = valueSchema(checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration));
    }
    return property;
  });
  const packageName = adapter === 'modal' ? 'modal' : 'toastr';
  const module = checker.getSymbolAtLocation(program.getSourceFile(path.join(root, `projects/blocks/${packageName}/public-api.ts`)));
  const contracts =
    adapter === 'modal'
      ? ['IModalConfig', 'IModalStyleConfig', 'IModalPatch', 'IBottomSheetModalConfig']
      : ['IToastConfig', 'IToastPatch', 'IQueueSimpleToastRequest'];
  for (const name of contracts) {
    let symbol = checker.getExportsOfModule(module).find((item) => item.name === name);
    if (!symbol) continue;
    if (symbol.flags & ts.SymbolFlags.Alias) symbol = checker.getAliasedSymbol(symbol);
    const type = checker.getDeclaredTypeOfSymbol(symbol);
    for (const member of checker.getPropertiesOfType(type))
      properties.push({
        ...argumentProperty(member, checker.getTypeOfSymbolAtLocation(member, member.valueDeclaration), undefined, `${name}.`),
        editor: 'documentation'
      });
  }
  return {
    id: entry.id,
    title: entry.title,
    properties,
    args,
    presets: [{ name: 'Default', args: {} }, ...(recipe.presets ?? [])],
    source: '',
    template: '',
    hasActions: true,
    adapter,
    className: declaration.name.text,
    modulePath: '@playground/' + adapters[adapter].split('/src/app/')[1].replace(/\.ts$/, '')
  };
}

const catalog = await readConstant(catalogPath, 'COMPONENT_EXAMPLES');
const recipes = await readConstant(recipesPath, 'DEMO_RECIPES');
const stories = [];
const banner = '// Generated by tools/playground/generate-demo-stories.mjs. Do not edit.\n';
for (const entry of catalog) {
  const override = recipes[entry.id] ?? {};
  const base = override.use ? recipes[override.use] : {};
  const recipe = { ...base, ...override, args: { ...base.args, ...override.args } };
  if (recipe.adapter) {
    stories.push(await serviceStory(entry, recipe));
    continue;
  }
  if (recipe.template === null) continue;
  const symbol = recipe.symbol ?? entry.symbol.split(',')[0].trim();
  const packageName = recipe.package ?? entry.package;
  const owner = findClass(packageName, symbol);
  const properties = propertiesOf(owner);
  const args = { content: entry.title, ...recipe.args };
  for (const property of properties) {
    if (recipe.json?.includes(property.name)) {
      property.editor = 'json';
      const member = checker.getPropertyOfType(owner.type, property.name);
      property.schema = valueSchema(checker.getTypeOfSymbolAtLocation(member, member.valueDeclaration).getCallSignatures()[0].getReturnType());
    }
    if (recipe.exclude?.includes(property.name)) property.editor = 'documentation';
    if (property.editor === 'documentation') continue;
    if (!(property.name in args)) args[property.name] = property.defaultValue;
    if (property.required && args[property.name] === undefined) property.editor = 'documentation';
  }
  const inputs = properties.filter((property) => property.editor !== 'documentation');
  const outputs = properties.filter((property) => property.kind === 'output');
  const models = properties.filter((property) => property.kind === 'model');
  const bindings = [
    ...inputs.map((property) => `[${property.binding}]="args().${property.name}"`),
    ...outputs.map((property) => `(${property.binding})="onAction('${property.binding}', $event)"`),
    ...models.map((property) => `(${property.binding}Change)="onAction('${property.binding}Change', $event)"`)
  ];
  const selector = entry.selector;
  const template = (recipe.template ?? `<${selector} DEMO_BINDINGS>{{ args().content }}</${selector}>`).replace('DEMO_BINDINGS', bindings.join('\n'));
  if (template.includes('service-owned') || (selector.startsWith('[') && !recipe.template)) throw new Error(`Story composition required: ${entry.id}.`);
  const className =
    entry.id
      .split('-')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join('') + 'Story';
  const imports = { [packageName]: [symbol], ...recipe.imports };
  if (!imports[packageName].includes(symbol)) imports[packageName].unshift(symbol);
  const importText = Object.entries(imports)
    .map(([source, names]) => `import { ${names.join(', ')} } from '${source}';`)
    .join('\n');
  const importNames = Object.values(imports).flat();
  const extras = Object.entries(recipe.extras ?? {}).map(([name, extra]) => {
    const type = extra.options?.length
      ? `${extra.options.map((value) => JSON.stringify(value)).join(' | ')} | undefined`
      : extra.editor === 'number'
        ? 'number'
        : extra.editor === 'boolean'
          ? 'boolean'
          : 'string';
    if (!(name in args)) args[name] = extra.defaultValue;
    properties.push({
      name,
      binding: name,
      kind: name === 'value' && entry.id === 'slider' ? 'model' : 'input',
      type,
      description: extra.description,
      defaultExpression: extra.defaultValue === undefined ? 'undefined' : JSON.stringify(extra.defaultValue),
      defaultValue: extra.defaultValue,
      options: extra.options,
      editor: extra.editor,
      required: extra.defaultValue !== undefined,
      nullable: false,
      optional: extra.defaultValue === undefined
    });
    return `${name}: ${type}`;
  });
  const argsType = `Pick<DemoInputs<${owner.name}>, ${inputs.length ? inputs.map((property) => `'${property.name}'`).join(' | ') : 'never'}> & { content: string; ${extras.join('; ')} }`;
  const members =
    entry.id === 'virtual-collection'
      ? 'public trackItem(_item: unknown, index: number): number { return index; }\n'
      : entry.id === 'slider'
        ? "public onNativeValue(event: Event): void { const target = event.target; if (target instanceof HTMLInputElement) this.onAction('valueChange', target.valueAsNumber); }\n"
        : '';
  if (entry.id === 'slider') models.push({ name: 'value', binding: 'value' });
  const source = `import type { WritableSignal } from '@angular/core';\nimport { ChangeDetectionStrategy, Component, signal } from '@angular/core';\n${importText}\n@Component({selector: 'app-example', imports: [${importNames.join(', ')}], changeDetection: ChangeDetectionStrategy.OnPush, templateUrl: './example.html'})\nexport class Example {\npublic readonly __FIELDS__: WritableSignal<unknown> = signal<unknown>(undefined);\n${members.replace("this.onAction('valueChange', target.valueAsNumber)", 'this.value.set(target.valueAsNumber)')}\n}\n`;
  const preview = `${banner}import type { InputSignal, OutputEmitterRef } from '@angular/core';\nimport { ChangeDetectionStrategy, Component, input, output } from '@angular/core';\n${importText}\nimport type { DemoInputs } from '@playground/types/demo-inputs.types';\nimport type { IDemoAction } from '@playground/interfaces/idemo-action.interface';\n@Component({selector: 'app-${entry.id}-story', imports: [${importNames.join(', ')}], changeDetection: ChangeDetectionStrategy.OnPush, templateUrl: './${entry.id}-story.html', styleUrl: '../../../../components/shared/demo-workbench/demo-preview.scss'})\nexport class ${className} {\npublic readonly args: InputSignal<${argsType}> = input.required<${argsType}>();\npublic readonly action: OutputEmitterRef<IDemoAction> = output<IDemoAction>();\npublic onAction(name: string, payload: unknown): void {this.action.emit({name, payload});}\n}\n`;
  await write(`${generated}/components/${entry.id}/${entry.id}-story.ts`, preview.replace('public onAction', `${members}public onAction`));
  await write(`${generated}/components/${entry.id}/${entry.id}-story.html`, template, false);
  await write(
    `${generated}/components/${entry.id}/README.md`,
    `# ${entry.title} story preview\n\nGenerated Angular preview for the Blocks ${entry.title.toLowerCase()} workbench.\n\n## Import\n\nInternal Playground component. Consumers copy the files from the Code panel instead.\n\n## Usage\n\nEdit the owning recipe in \`shared/constants/demo-recipes.constants.ts\` and run \`npm run tools:generate:demo-stories\`. Do not edit generated files.\n\n## API\n\nThe typed \`args\` input receives the active story configuration. The \`action\` output reports component events and model changes to the shared workbench.\n\n## Appearance and customization\n\nThe preview uses the public Blocks component, its semantic tokens and the active application appearance.\n\n## Behavior and accessibility\n\nPreview and copied example share the generated Angular template. The library component owns its normal interaction and accessibility behavior.\n\n## Playground\n\nOpen \`/components/${entry.layout ? 'layout/' : ''}${entry.id}\`. See the colocated library guide at \`${entry.readme}\`.\n`,
    false
  );

  properties.unshift({
    name: 'content',
    binding: 'content',
    kind: 'input',
    type: 'string',
    description: 'Projected example content. This is story content, not a component input.',
    defaultExpression: JSON.stringify(entry.title),
    defaultValue: entry.title,
    editor: template.includes('args().content') ? 'text' : 'documentation',
    required: false,
    nullable: false,
    optional: false
  });
  stories.push({
    id: entry.id,
    title: entry.title,
    properties,
    args,
    presets: [{ name: 'Default', args: {} }, ...(recipe.presets ?? [])],
    template: await readFile(path.join(root, `${generated}/components/${entry.id}/${entry.id}-story.html`), 'utf8'),
    componentType: owner.name,
    hasActions: template.includes('onAction(') || members.includes('onAction('),
    source: await formatGeneratedTypeScript(source, `${generated}/components/${entry.id}/example.ts`),
    className
  });
}
for (const story of stories) {
  const editable = new Set(
    story.properties.filter((property) => property.editor !== 'documentation' || property.name === 'content').map((property) => property.name)
  );
  const ownRecipe = recipes[story.id];
  const constraints = ownRecipe?.constraints ?? recipes[ownRecipe?.use]?.constraints;
  for (const property of story.properties) if (constraints?.[property.name]) property.constraints = constraints[property.name];
  for (const values of [story.args, ...story.presets.map((preset) => preset.args)]) {
    for (const key of Object.keys(values))
      if (!editable.has(key)) throw new Error(`Argument ${story.id}.${key} has no editable binding. Supply a typed adapter or remove the override.`);
  }
}
await write(
  `${generated}/constants/demo-stories.constants.ts`,
  `${banner}import type { IDemoStory } from '@playground/interfaces/idemo-story.interface';\nexport const DEMO_STORIES: Readonly<Record<string, IDemoStory>> = {\n${stories.map(({ className, modulePath, ...story }) => `${JSON.stringify(story.id)}: { ...${JSON.stringify(story)}, load: () => import('${modulePath ?? `@playground/generated/demo-stories/components/${story.id}/${story.id}-story`}').then((module) => module.${className}) }`).join(',\n')}\n};\n`
);
console.log(`Generated ${stories.length} Angular stories with declaration-derived APIs.`);

const sourceFormatOptions = {};
for (const [language, filename] of [
  ['typescript', 'example.ts'],
  ['html', 'example.html']
]) {
  const options = { ...(await resolveConfig(path.join(root, filename))) };
  delete options.plugins;
  delete options.overrides;
  sourceFormatOptions[language] = { ...options, parser: language === 'html' ? 'angular' : 'typescript' };
}
await write(
  `${generated}/constants/demo-source-format.constants.ts`,
  `${banner}import type { Options } from 'prettier';\nexport const DEMO_SOURCE_FORMAT_OPTIONS: Readonly<Record<'typescript' | 'html', Options>> = ${JSON.stringify(sourceFormatOptions)};\n`
);
