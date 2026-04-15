"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ngAdd = ngAdd;
const tasks_1 = require("@angular-devkit/schematics/tasks");
function ngAdd(options) {
    return (tree, context) => {
        injectStyles(tree, context, options);
        context.addTask(new tasks_1.NodePackageInstallTask());
        return tree;
    };
}
function injectStyles(tree, context, options) {
    const workspaceConfigPath = '/angular.json';
    if (!tree.exists(workspaceConfigPath)) {
        context.logger.warn('Could not find angular.json. Please configure the Blocks theme manually.');
        return;
    }
    const workspaceConfigBuffer = tree.read(workspaceConfigPath);
    if (!workspaceConfigBuffer)
        return;
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
    const content = tree.read(targetStylePath).toString('utf-8');
    if (content.includes('@filip.mazev/blocks-core')) {
        context.logger.info('Blocks SCSS configuration already exists. Skipping style injection.');
        return;
    }
    const lightThemeVar = `$${options.theme}-light-theme`;
    const darkThemeVar = `$${options.theme}-dark-theme`;
    const blocksThemeSnippet = `
@use '@filip.mazev/blocks/core/styles/index' as *;

@layer base {
    :root {
        @include bx-theme(${lightThemeVar});
    }

    [data-theme='dark'] {
        @include bx-theme(${darkThemeVar});
    }
}
`;
    tree.overwrite(targetStylePath, blocksThemeSnippet + '\n' + content);
    context.logger.info(`Successfully injected the ${options.theme} Blocks theme configuration into ${targetStylePath}.`);
}
