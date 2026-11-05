import path from 'node:path';

import { catchError, defer, from, map, of, switchMap } from 'rxjs';

import { createBuilder } from '@angular-devkit/architect';
import { ngPackagr } from 'ng-packagr';
import { ANALYSE_SOURCES_TOKEN } from 'ng-packagr/src/lib/ng-package/entry-point/analyse-sources.di.js';
import { analyseSourcesTransform } from 'ng-packagr/src/lib/ng-package/entry-point/analyse-sources.transform.js';
import { WRITE_BUNDLES_TRANSFORM_TOKEN } from 'ng-packagr/src/lib/ng-package/entry-point/write-bundles.di.js';
import { writeBundlesTransform } from 'ng-packagr/src/lib/ng-package/entry-point/write-bundles.transform.js';
import { OPTIONS_TOKEN } from 'ng-packagr/src/lib/ng-package/options.di.js';

import { readPathAliases } from '../paths/helpers/path-alias.helpers.mjs';
import { prepareAnalysisAliases } from './helpers/analysis-alias.helpers.mjs';
import { rewriteBundleAliases } from './helpers/bundle-alias.helpers.mjs';

export default createBuilder((options, context) => {
  const aliases = readPathAliases(context.workspaceRoot);

  return defer(async () => {
    const metadata = await context.getProjectMetadata(context.target.project);
    const project = options.project ?? path.join(metadata.root, 'ng-package.json');
    const packager = ngPackagr()
      .forProject(path.resolve(context.workspaceRoot, project))
      .withProviders([
        {
          provide: ANALYSE_SOURCES_TOKEN,
          useFactory: () => (source) =>
            source.pipe(
              map((graph) => prepareAnalysisAliases(graph, aliases)),
              analyseSourcesTransform
            )
        },
        {
          provide: WRITE_BUNDLES_TRANSFORM_TOKEN,
          deps: [OPTIONS_TOKEN],
          useFactory: (buildOptions) => (source) =>
            source.pipe(
              map((graph) => rewriteBundleAliases(graph, aliases)),
              writeBundlesTransform(buildOptions)
            )
        }
      ]);

    if (options.tsConfig) {
      packager.withTsConfig(path.resolve(context.workspaceRoot, options.tsConfig));
    }

    return packager;
  }).pipe(
    switchMap((packager) => {
      const buildOptions = {
        poll: options.poll,
        cacheEnabled: true,
        cacheDirectory: path.join(context.workspaceRoot, '.angular/cache/blocks-library')
      };

      return options.watch ? packager.watch(buildOptions) : from(packager.build(buildOptions));
    }),
    map(() => ({ success: true })),
    catchError((error) => of({ success: false, error: error.message }))
  );
});
