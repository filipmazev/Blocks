import importSort from 'eslint-plugin-simple-import-sort';
import shared from 'eslint-plugin-simple-import-sort/shared.js';

import { IMPORT_GROUPS } from '../constants/import-order.constants.mjs';

/** Retain the sorter's comment/specifier handling while placing namespace declarations in a final group. */
export default {
  meta: {
    ...importSort.rules.imports.meta,
    messages: { sort: 'Sort imports by source group, with namespace imports last and separated by an empty line.' }
  },
  create(context) {
    const groups = (context.options[0]?.groups ?? IMPORT_GROUPS).map((group) => group.map((pattern) => new RegExp(pattern, 'u')));
    const parents = new Set();

    return {
      ImportDeclaration(node) {
        parents.add(node.parent);
      },
      'Program:exit'() {
        const source = context.sourceCode;

        for (const parent of parents) {
          const chunks = shared.extractChunks(parent, (node) => (node.type === 'ImportDeclaration' ? 'PartOfChunk' : 'NotPartOfChunk'));

          for (const chunk of chunks) {
            const items = shared.getImportExportItems(
              chunk,
              source,
              (node) => node.specifiers.length === 0 && !shared.isPunctuator(source.getFirstToken(node, { skip: 1 }), '{'),
              (node) => node.specifiers.filter((specifier) => specifier.type === 'ImportSpecifier')
            );
            const buckets = groups.map((group) => group.map((pattern) => ({ pattern, items: [] })));
            const namespaces = [];
            const unmatched = [];

            for (const item of items) {
              if (item.node.specifiers.some((specifier) => specifier.type === 'ImportNamespaceSpecifier')) {
                namespaces.push(item);

                continue;
              }

              const value = item.isSideEffectImport
                ? `\0${item.source.originalSource}`
                : item.source.kind !== 'value'
                  ? `${item.source.originalSource}\0`
                  : item.source.originalSource;
              let chosen;
              let longest = -1;

              for (const bucket of buckets.flat()) {
                const match = bucket.pattern.exec(value);

                if (match && match[0].length > longest) {
                  chosen = bucket;
                  longest = match[0].length;
                }
              }

              (chosen?.items ?? unmatched).push(item);
            }

            const sorted = buckets
              .map((group) => group.filter((bucket) => bucket.items.length).map((bucket) => shared.sortImportExportItems(bucket.items)))
              .filter((group) => group.length);

            if (unmatched.length) {
              sorted.push([shared.sortImportExportItems(unmatched)]);
            }

            if (namespaces.length) {
              sorted.push([shared.sortImportExportItems(namespaces)]);
            }

            shared.maybeReportSorting(context, shared.printSortedItems(sorted, items, source), items[0].start, items.at(-1).end);
          }
        }
      }
    };
  }
};
