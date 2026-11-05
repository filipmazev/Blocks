import { getDocumentation, hasDescription } from '../helpers/documentation.helpers.mjs';

export default {
  meta: {
    type: 'suggestion',
    schema: [],
    messages: {
      interface: 'Document exported library interfaces with a descriptive JSDoc comment.',
      property:
        'Document each exported library interface member with descriptive JSDoc immediately above it; put property documentation here instead of interface-level @param tags.',
      param: 'Use property-level JSDoc for interface properties and @typeParam for generic parameters; interface-level @param tags are not supported.'
    }
  },
  create(context) {
    const exportedNames = new Set();

    return {
      Program(node) {
        for (const statement of node.body) {
          if (statement.type === 'ExportNamedDeclaration' && !statement.source) {
            for (const specifier of statement.specifiers) {
              exportedNames.add(specifier.local.name);
            }
          }
        }
      },
      TSInterfaceDeclaration(node) {
        const directlyExported = ['ExportNamedDeclaration', 'ExportDefaultDeclaration'].includes(node.parent.type);

        if (!directlyExported && !exportedNames.has(node.id.name)) {
          return;
        }

        const declaration = directlyExported ? node.parent : node;
        const documentation = getDocumentation(context.sourceCode, declaration);

        if (!hasDescription(documentation)) {
          context.report({ node: node.id, messageId: 'interface' });
        }

        if (documentation && /@param\b/.test(documentation.value)) {
          context.report({ loc: documentation.loc, messageId: 'param' });
        }

        for (const member of node.body.body) {
          if (!hasDescription(getDocumentation(context.sourceCode, member))) {
            context.report({ node: member, messageId: 'property' });
          }
        }
      }
    };
  }
};
