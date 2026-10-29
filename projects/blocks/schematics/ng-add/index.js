"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ngAdd = ngAdd;
function ngAdd(options) {
    return (tree, context) => {
        var _a;
        const theme = (_a = options.theme) !== null && _a !== void 0 ? _a : 'carbon-cobalt';
        injectStyles(tree, context, { theme });
        return tree;
    };
}
function injectStyles(tree, context, options) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const workspaceConfigPath = '/angular.json';
    if (!tree.exists(workspaceConfigPath)) {
        context.logger.warn('Could not find angular.json. Please configure the Blocks theme manually.');
        return;
    }
    const workspaceConfigBuffer = tree.read(workspaceConfigPath);
    if (!workspaceConfigBuffer)
        return;
    const workspaceConfig = JSON.parse(workspaceConfigBuffer.toString('utf-8'));
    const projectName = workspaceConfig.defaultProject || Object.keys((_a = workspaceConfig.projects) !== null && _a !== void 0 ? _a : {}).find((name) => workspaceConfig.projects[name].projectType === 'application');
    const project = workspaceConfig.projects[projectName];
    if (!project) {
        context.logger.warn('Could not find a valid project in angular.json.');
        return;
    }
    const buildOptions = (_d = (_c = ((_b = project.architect) !== null && _b !== void 0 ? _b : project.targets)) === null || _c === void 0 ? void 0 : _c.build) === null || _d === void 0 ? void 0 : _d.options;
    if (!buildOptions) {
        context.logger.warn(`Could not find styles configuration for project "${projectName}".`);
        return;
    }
    (_e = buildOptions.styles) !== null && _e !== void 0 ? _e : (buildOptions.styles = []);
    const effectsStyles = 'node_modules/@filip.mazev/blocks/effects/effects.css';
    const legacyStyles = new Set(['node_modules/@filip.mazev/blocks/glass/glass.css', 'node_modules/@filip.mazev/blocks-glass/glass.css']);
    buildOptions.styles = buildOptions.styles.filter((style) => !legacyStyles.has(typeof style === 'string' ? style : style.input));
    const hasEffectsStyles = buildOptions.styles.some((style) => (typeof style === 'string' ? style : style.input) === effectsStyles);
    if (!hasEffectsStyles)
        buildOptions.styles.unshift(effectsStyles);
    tree.overwrite(workspaceConfigPath, JSON.stringify(workspaceConfig, null, 2) + '\n');
    context.logger.info('Configured the shared Blocks effects stylesheet.');
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
    const targetStyle = tree.read(targetStylePath);
    if (!targetStyle)
        return;
    const content = targetStyle.toString('utf-8');
    // Existing themes still receive the effects stylesheet above.
    if (content.includes('@filip.mazev/blocks')) {
        context.logger.info('Blocks SCSS configuration already exists. Skipping style injection.');
        return;
    }
    const lightThemeVar = `$${(_f = options.theme) !== null && _f !== void 0 ? _f : 'carbon-cobalt'}-light-theme`;
    const darkThemeVar = `$${(_g = options.theme) !== null && _g !== void 0 ? _g : 'carbon-cobalt'}-dark-theme`;
    const blocksThemeSnippet = `
@use '@filip.mazev/blocks' as *;

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
    context.logger.info(`Successfully injected the ${(_h = options.theme) !== null && _h !== void 0 ? _h : 'carbon-cobalt'} Blocks theme configuration into ${targetStylePath}.`);
}
