import fs from 'node:fs';
import path from 'node:path';

import { DECLARATION_LAYOUT } from '../constants/declaration-layout.constants.mjs';
import { getAngularImport } from '../helpers/angular.helpers.mjs';

export default {
  meta: {
    type: 'suggestion',
    schema: [],
    messages: {
      primary: 'Keep one primary component, directive, service, or class in this file; move supporting declarations to their feature-level category files.',
      mixed: 'Do not mix declaration categories in one file; move this {{kind}} declaration into its own feature-level category.',
      folder: "Place {{kind}} declarations in the owning entry point's top-level '{{folder}}' folder, alongside components and directives.",
      filename: "Use a '{{suffix}}' filename for this {{kind}} declaration.",
      interface: "Name the interface file '{{expected}}' to match its declared interface.",
      owner: 'Keep each concrete component or directive in its own folder with its template, styles, existing specs, and README.',
      readme: 'Colocate a README.md with this concrete component or directive.',
      class: 'Place this class in the feature-level classes/services folder, or its appropriate components/directives/pipes folder.',
      state: 'Keep module-level mutable state in an owning class or service instead of mixing it with helpers or constants.',
      nested: 'Extract this supporting declaration into its own entry-point category file instead of nesting it inside another declaration.'
    }
  },
  create(context) {
    const filename = context.filename;

    if (filename.endsWith('.spec.ts') || filename.endsWith('.d.ts')) return {};

    let root = path.dirname(filename);

    while (!fs.existsSync(path.join(root, 'ng-package.json')) && path.dirname(root) !== root) root = path.dirname(root);

    const schematic = /^(.*[/\\]schematics[/\\][^/\\]+)[/\\]/.exec(filename);

    if (schematic) root = schematic[1];

    const relative = path.relative(root, filename).split(path.sep);
    const folder = relative[0];
    const basename = path.basename(filename);

    function category(node) {
      if (node.type === 'ClassDeclaration') return 'class';
      if (node.type === 'TSTypeAliasDeclaration') return 'type';
      if (node.type === 'TSInterfaceDeclaration') return 'interface';
      if (node.type === 'TSEnumDeclaration') return 'enum';
      if (['FunctionDeclaration', 'TSDeclareFunction'].includes(node.type)) return 'helper';
      if (node.type !== 'VariableDeclarator') return undefined;

      let value = node.init;

      while (value && ['TSAsExpression', 'TSSatisfiesExpression', 'TSNonNullExpression'].includes(value.type)) value = value.expression;

      if (['ArrowFunctionExpression', 'FunctionExpression'].includes(value?.type)) return 'helper';
      if (value?.type === 'ClassExpression') return 'class';
      if (value?.type === 'NewExpression' && getAngularImport(context.sourceCode, value.callee) === 'InjectionToken') return 'token';

      return 'constant';
    }

    return {
      'TSTypeAliasDeclaration, TSInterfaceDeclaration, TSEnumDeclaration, ClassDeclaration'(node) {
        if (!['Program', 'ExportNamedDeclaration', 'ExportDefaultDeclaration'].includes(node.parent.type)) {
          context.report({ node, messageId: 'nested' });
        }
      },
      Program(program) {
        const declarations = program.body.flatMap((statement) => {
          const declaration = statement.type.startsWith('Export') ? statement.declaration : statement;

          return declaration?.type === 'VariableDeclaration' ? declaration.declarations : declaration ? [declaration] : [];
        });
        const primary = declarations.filter((node) => category(node) === 'class');
        const kinds = new Set(declarations.map(category).filter(Boolean));

        for (const node of declarations) {
          const kind = category(node);

          if (!kind) continue;

          if (primary.length && (kind !== 'class' || node !== primary[0])) context.report({ node, messageId: 'primary' });
          else if (!primary.length && kinds.size > 1) context.report({ node, messageId: 'mixed', data: { kind } });

          if (kind === 'class') {
            const decorators = node.decorators ?? [];
            const angular = decorators.map((decorator) => getAngularImport(context.sourceCode, decorator.expression.callee ?? decorator.expression));

            if (!node.abstract && angular.some((name) => ['Component', 'Directive'].includes(name))) {
              const expected = angular.includes('Component') ? 'components' : 'directives';

              if (folder !== expected || relative.length < 3) context.report({ node, messageId: 'owner' });
              if (!fs.existsSync(path.join(path.dirname(filename), 'README.md'))) context.report({ node: node.id ?? node, messageId: 'readme' });
            } else {
              const service = angular.includes('Injectable') && (node.id?.name.endsWith('Service') || basename.endsWith('.service.ts'));
              const expected = service ? 'services' : angular.includes('Pipe') ? 'pipes' : 'classes';

              if (folder !== expected) context.report({ node, messageId: 'class' });
              if (service && !basename.endsWith('.service.ts')) {
                context.report({ node, messageId: 'filename', data: { kind: 'service', suffix: '.service.ts' } });
              }
            }

            continue;
          }

          const layout = DECLARATION_LAYOUT[kind];

          if (folder !== layout.folder) context.report({ node, messageId: 'folder', data: { kind, folder: layout.folder } });
          if (!basename.endsWith(layout.suffix)) context.report({ node, messageId: 'filename', data: { kind, suffix: layout.suffix } });

          if (kind === 'interface' && /^I[A-Z]/.test(node.id.name)) {
            const description = node.id.name
              .slice(1)
              .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
              .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
              .toLowerCase();
            const expected = `i${description}.interface.ts`;

            if (basename !== expected) context.report({ node: node.id, messageId: 'interface', data: { expected } });
          }

          if (node.type === 'VariableDeclarator' && node.parent.kind !== 'const') context.report({ node, messageId: 'state' });
        }
      }
    };
  }
};
