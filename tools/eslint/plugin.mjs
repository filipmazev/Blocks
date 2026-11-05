import blockIndentation from './rules/block-indentation.mjs';
import declarationLayout from './rules/declaration-layout.mjs';
import documentedInterfaces from './rules/documented-interfaces.mjs';
import documentedPublicApi from './rules/documented-public-api.mjs';
import explicitPropertyTypes from './rules/explicit-property-types.mjs';
import helpersRegions from './rules/helpers-regions.mjs';
import injectedReferenceNames from './rules/injected-reference-names.mjs';
import memberOrdering from './rules/member-ordering.mjs';
import memberSpacing from './rules/member-spacing.mjs';
import modernAngularApis from './rules/modern-angular-apis.mjs';
import orderedImports from './rules/ordered-imports.mjs';
import preferPathAliases from './rules/prefer-path-aliases.mjs';

export default {
  rules: {
    'declaration-layout': declarationLayout,
    'documented-interfaces': documentedInterfaces,
    'documented-public-api': documentedPublicApi,
    'block-indentation': blockIndentation,
    'explicit-property-types': explicitPropertyTypes,
    'helpers-regions': helpersRegions,
    'injected-reference-names': injectedReferenceNames,
    'member-ordering': memberOrdering,
    'member-spacing': memberSpacing,
    'modern-angular-apis': modernAngularApis,
    'prefer-path-aliases': preferPathAliases,
    'ordered-imports': orderedImports
  }
};
