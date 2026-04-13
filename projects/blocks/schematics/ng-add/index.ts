import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

export interface NgAddOptions {
  theme: 'purple' | 'orange' | 'red' | 'green';
}

export function ngAdd(options: NgAddOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    addDependencies(tree, context);
    injectStyles(tree, context, options);
    context.addTask(new NodePackageInstallTask());
    return tree;
  };
}

function addDependencies(tree: Tree, context: SchematicContext): void {
  const packageJsonPath = '/package.json';
  if (!tree.exists(packageJsonPath)) {
    context.logger.warn('Could not find package.json. Skipping dependency injection.');
    return;
  }
  const packageJsonBuffer = tree.read(packageJsonPath);
  if (!packageJsonBuffer) return;
  const packageJson = JSON.parse(packageJsonBuffer.toString('utf-8'));
  
  if (!packageJson.dependencies) packageJson.dependencies = {};
  
  const packages = [
    '@filip.mazev/blocks-core',
    '@filip.mazev/modal',
    '@filip.mazev/toastr',
    '@filip.mazev/icons'
  ];
  
  let dependenciesAdded = false;
  packages.forEach(pkg => {
    if (!packageJson.dependencies[pkg]) {
      packageJson.dependencies[pkg] = 'latest';
      context.logger.info(`Added ${pkg} to dependencies.`);
      dependenciesAdded = true;
    }
  });
  
  if (dependenciesAdded) {
    tree.overwrite(packageJsonPath, JSON.stringify(packageJson, null, 2));
  }
}

function injectStyles(tree: Tree, context: SchematicContext, options: NgAddOptions): void {
  const workspaceConfigPath = '/angular.json';
  if (!tree.exists(workspaceConfigPath)) {
    context.logger.warn('Could not find angular.json. Please configure the Blocks theme manually.');
    return;
  }
  const workspaceConfigBuffer = tree.read(workspaceConfigPath);
  if (!workspaceConfigBuffer) return;
  
  const workspaceConfig = JSON.parse(workspaceConfigBuffer.toString('utf-8'));
  const projectName = workspaceConfig.defaultProject || Object.keys(workspaceConfig.projects)[0];
  const project = workspaceConfig.projects[projectName];
  
  if (!project) {
    context.logger.warn('Could not find a valid project in angular.json.');
    return;
  }
  
  const buildOptions = project.architect?.build?.options;
  if (!buildOptions || !buildOptions.styles) {
    context.logger.warn(`Could not find styles configuration for project "${projectName}".`);
    return;
  }
  
  let targetStylePath = '';
  for (const style of buildOptions.styles) {
    const styleString = typeof style === 'string' ? style : style.input;
    if (styleString && (styleString.endsWith('.scss') || styleString.endsWith('.sass'))) {
      targetStylePath = styleString;
      break;
    }
  }
  
  if (!targetStylePath || !tree.exists(targetStylePath)) {
    context.logger.warn('Could not locate a global .scss or .sass file. Please configure the Blocks theme manually.');
    return;
  }
  
  const content = tree.read(targetStylePath)!.toString('utf-8');
  if (content.includes('@filip.mazev/blocks-core')) {
    context.logger.info('Blocks SCSS configuration already exists. Skipping style injection.');
    return;
  }

  const lightThemeVar = `$${options.theme}-light-theme`;
  const darkThemeVar = `$${options.theme}-dark-theme`;

  const blocksThemeSnippet = `
@use '@filip.mazev/blocks-core/src/lib/styles/index' as *;
@use '@filip.mazev/modal/lib/styles/index' as modal;

@layer base {
    :root {
        @include core-theme(${lightThemeVar});
        @include modal.modal-theme();
    }

    [data-theme='dark'] {
        @include core-theme(${darkThemeVar});
    }
}
`;

  tree.overwrite(targetStylePath, blocksThemeSnippet + '\n' + content);
  context.logger.info(`Successfully injected the ${options.theme} Blocks theme configuration into ${targetStylePath}.`);
}