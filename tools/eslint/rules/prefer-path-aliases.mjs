import { resolvePathAlias } from '../../paths/helpers/path-alias.helpers.mjs';

export default {
  meta: {
    type: 'suggestion',
    fixable: 'code',
    schema: [
      {
        type: 'object',
        required: ['aliases'],
        additionalProperties: false,
        properties: {
          aliases: {
            type: 'array',
            items: {
              type: 'object',
              required: ['alias', 'directory'],
              additionalProperties: false,
              properties: { alias: { type: 'string' }, directory: { type: 'string' } }
            }
          }
        }
      }
    ],
    messages: {
      alias: "Use '{{alias}}' for imports outside this folder; retain './' for direct siblings.",
      missingAlias: 'Add a TypeScript @ path alias for this import outside the current folder.',
      internalBarrel: 'Import this feature dependency from its defining file instead of its own public barrel.'
    }
  },
  create(context) {
    const aliases = context.options[0].aliases;
    const check = (node) => {
      if (!node || typeof node.value !== 'string') {
        return;
      }

      const owner = context.filename.replaceAll('\\', '/').match(/\/projects\/blocks\/([^/]+)\//)?.[1];
      const feature = /^@(core|effects|forms|icons|modal|navigation|primitives|toastr)\/(.+)$/.exec(node.value);

      if (owner && feature && feature[1] !== owner) {
        const alias = `@filip.mazev/blocks/${feature[1]}`;

        context.report({ node, messageId: 'alias', data: { alias }, fix: (fixer) => fixer.replaceText(node, `'${alias}'`) });

        return;
      }

      if (owner && feature?.[1] === owner && feature[2] === 'public-api') {
        context.report({ node, messageId: 'internalBarrel' });

        return;
      }

      if (!node.value.startsWith('.')) {
        return;
      }

      const normalized = node.value.replace(/^\.\//, '');

      if (!normalized.includes('/') && !normalized.startsWith('..')) {
        return;
      }

      const alias = resolvePathAlias(node.value, context.filename, aliases);

      if (!alias) {
        context.report({ node, messageId: 'missingAlias' });

        return;
      }

      context.report({
        node,
        messageId: 'alias',
        data: { alias },
        fix: (fixer) => fixer.replaceText(node, `'${alias}'`)
      });
    };

    return {
      ImportDeclaration: (node) => check(node.source),
      ExportNamedDeclaration: (node) => check(node.source),
      ExportAllDeclaration: (node) => check(node.source),
      ImportExpression: (node) => check(node.source),
      TSImportType: (node) => check(node.source ?? node.argument),
      TSExternalModuleReference: (node) => check(node.expression),
      "CallExpression[callee.type='Identifier'][callee.name='require']": (node) => check(node.arguments[0])
    };
  }
};
