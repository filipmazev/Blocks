import { execFile } from 'node:child_process';
import { mkdir, mkdtemp, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

import { ESLint } from 'eslint';
import { format, resolveConfig } from 'prettier';
import ts from 'typescript';

import sourceLintConfig from '../../eslint.config.js';

const root = fileURLToPath(new URL('../../', import.meta.url));
const temporary = await mkdtemp(path.join(tmpdir(), 'blocks-angular-examples-'));

async function importSource(relative) {
  const source = await readFile(path.join(root, relative), 'utf8');
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
  return import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);
}

try {
  const { DEMO_STORIES } = await importSource('projects/playground/src/app/generated/demo-stories/constants/demo-stories.constants.ts');
  const { demoSourceFiles } = await importSource('projects/playground/src/app/shared/helpers/demo-source.helpers.ts');
  const { DEMO_SOURCE_FORMAT_OPTIONS } = await importSource('projects/playground/src/app/generated/demo-stories/constants/demo-source-format.constants.ts');
  const lintFormatOptions = {
    typescript: await resolveConfig(path.join(root, 'example.ts')),
    html: await resolveConfig(path.join(root, 'example.html'))
  };
  const files = [];
  const lintFiles = [];
  let examples = 0;
  await symlink(path.join(root, 'node_modules'), path.join(temporary, 'node_modules'));
  for (const story of Object.values(DEMO_STORIES)) {
    const changed = { ...story.args };
    for (const property of story.properties) {
      if (property.editor === 'boolean') changed[property.name] = !changed[property.name];
      if (property.editor === 'number') changed[property.name] = Math.max(property.constraints?.min ?? -1, Math.min(property.constraints?.max ?? 0, -1));
      if (property.editor === 'text' && property.name === 'content')
        changed[property.name] = `O'Reilly says "Hello". C:\\workspace\n${'Long content '.repeat(25)} $&`;
    }
    const cases = [...story.presets.map((preset) => ({ ...story.args, ...preset.args })), changed];
    for (const [index, args] of cases.entries()) {
      const directory = path.join(temporary, 'projects/playground/exported', story.id, String(index));
      await mkdir(directory, { recursive: true });
      for (const file of demoSourceFiles(story, args)) {
        if (!file.content || /from ['"]@playground|DemoInputs|StoryArgs|__FIELDS__|args\(\)|onAction\(/.test(file.content))
          throw new Error(`Incomplete consumer example: ${story.id}/${file.path}.`);
        const destination = path.join(directory, file.path);
        const content = await format(file.content, DEMO_SOURCE_FORMAT_OPTIONS[file.language]);
        await writeFile(destination, content);
        lintFiles.push(destination);
        if (file.language === 'typescript') files.push(destination);
      }
      examples++;
    }
  }
  const config = {
    extends: path.join(root, 'tsconfig.json'),
    compilerOptions: { rootDir: '/', noEmit: true, types: [], incremental: false },
    angularCompilerOptions: { strictTemplates: true, strictInjectionParameters: true, strictInputAccessModifiers: true },
    files,
    include: [],
    exclude: []
  };
  await writeFile(path.join(temporary, 'tsconfig.json'), JSON.stringify(config, null, 2));
  const eslint = new ESLint({
    cwd: temporary,
    overrideConfigFile: true,
    overrideConfig: [
      ...sourceLintConfig,
      { files: ['**/*.ts'], languageOptions: { parserOptions: { project: path.join(temporary, 'tsconfig.json'), tsconfigRootDir: temporary } } },
      ...Object.entries(lintFormatOptions).map(([language, options]) => ({
        files: [language === 'typescript' ? '**/*.ts' : '**/*.html'],
        rules: { 'prettier/prettier': ['error', options, { usePrettierrc: false }] }
      }))
    ]
  });
  const results = await eslint.lintFiles(lintFiles);
  const failures = results.filter((result) => result.errorCount || result.warningCount);
  if (failures.length) {
    console.error(await (await eslint.loadFormatter('stylish')).format(failures));
    throw new Error(`Copied examples violate source lint rules in ${failures.length} files.`);
  }
  await promisify(execFile)(
    process.execPath,
    [path.join(root, 'node_modules/@angular/compiler-cli/bundles/src/bin/ngc.js'), '-p', path.join(temporary, 'tsconfig.json')],
    { cwd: root, maxBuffer: 16 * 1024 * 1024 }
  );
  console.log(`ESLint and Angular checked ${examples} copied preset/changed-state examples with their supporting files.`);
} catch (error) {
  console.error(error.stdout || error.stderr || error.message);
  process.exitCode = 1;
} finally {
  await rm(temporary, { recursive: true, force: true });
}
