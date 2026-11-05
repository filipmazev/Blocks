import blockIndentation from './rules/block-indentation.mjs';
import documentedInterfaces from './rules/documented-interfaces.mjs';
import explicitPropertyTypes from './rules/explicit-property-types.mjs';
import helpersRegions from './rules/helpers-regions.mjs';
import memberOrdering from './rules/member-ordering.mjs';
import memberSpacing from './rules/member-spacing.mjs';
import modernAngularApis from './rules/modern-angular-apis.mjs';
import orderedImports from './rules/ordered-imports.mjs';
import preferPathAliases from './rules/prefer-path-aliases.mjs';

export default {
  rules: {
    'documented-interfaces': documentedInterfaces,
    'block-indentation': blockIndentation,
    'explicit-property-types': explicitPropertyTypes,
    'helpers-regions': helpersRegions,
    'member-ordering': memberOrdering,
    'member-spacing': memberSpacing,
    'modern-angular-apis': modernAngularApis,
    'prefer-path-aliases': preferPathAliases,
    'ordered-imports': orderedImports
  }
};
