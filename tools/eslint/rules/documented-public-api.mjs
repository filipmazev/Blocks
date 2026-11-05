import { getAngularImport } from '../helpers/angular.helpers.mjs';
import { getDocumentation, getDocumentedParameters, getExportedLocalNames, hasDescription } from '../helpers/documentation.helpers.mjs';

export default {
  meta: {
    type: 'suggestion',
    schema: [],
    messages: {
      description: 'Document this exported library {{kind}} with descriptive JSDoc explaining its behavior or purpose.',
      parameter: "Document parameter '{{name}}' with a descriptive @param tag.",
      typeParameter: "Document generic parameter '{{name}}' with a descriptive @typeParam tag."
    }
  },
  create(context) {
    let exportedNames = new Set();

    function isExported(node, name = node.id?.name) {
      return ['ExportNamedDeclaration', 'ExportDefaultDeclaration'].includes(node.parent.type) || (node.parent.type === 'Program' && exportedNames.has(name));
    }

    function check(node, declaration, callable, kind) {
      const documentation = getDocumentation(context.sourceCode, declaration);

      if (!hasDescription(documentation)) context.report({ node: node.key ?? node.id ?? node, messageId: 'description', data: { kind } });
      if (!callable) return;

      const parameters = getDocumentedParameters(documentation, 'param');
      const roots = [...parameters.keys()].filter((name) => !name.includes('.'));

      for (const [index, parameter] of callable.params.entries()) {
        let binding = parameter;

        while (['AssignmentPattern', 'RestElement', 'TSParameterProperty'].includes(binding.type)) {
          binding = binding.left ?? binding.argument ?? binding.parameter;
        }

        const name = binding.type === 'Identifier' ? binding.name : roots[index];

        if (!name || !parameters.has(name)) {
          context.report({ node: parameter, messageId: 'parameter', data: { name: name ?? `destructured argument ${index + 1}` } });
        }
      }

      const generics = getDocumentedParameters(documentation, 'typeParam');

      for (const parameter of callable.typeParameters?.params ?? []) {
        const name = typeof parameter.name === 'string' ? parameter.name : parameter.name.name;

        if (!generics.has(name)) context.report({ node: parameter, messageId: 'typeParameter', data: { name } });
      }
    }

    return {
      Program(node) {
        exportedNames = getExportedLocalNames(node);
      },
      ClassDeclaration(node) {
        const angular = (node.decorators ?? []).some((decorator) => {
          const expression = decorator.expression.type === 'CallExpression' ? decorator.expression.callee : decorator.expression;

          return ['Component', 'Directive', 'Injectable', 'Service'].includes(getAngularImport(context.sourceCode, expression));
        });

        if (!isExported(node) || !angular) return;

        for (const member of node.body.body) {
          if (member.key?.type === 'PrivateIdentifier' || ['private', 'protected'].includes(member.accessibility) || member.kind === 'constructor') continue;

          if (['PropertyDefinition', 'AccessorProperty', 'TSAbstractPropertyDefinition', 'TSAbstractAccessorProperty'].includes(member.type)) {
            const callable = ['ArrowFunctionExpression', 'FunctionExpression'].includes(member.value?.type) ? member.value : undefined;

            check(member, member, callable, 'public property');
          } else if (['MethodDefinition', 'TSAbstractMethodDefinition'].includes(member.type)) {
            check(member, member, member.value, member.kind === 'get' || member.kind === 'set' ? 'public accessor' : 'public method');
          }
        }
      },
      'FunctionDeclaration, TSDeclareFunction'(node) {
        if (isExported(node)) check(node, node.parent.type.startsWith('Export') ? node.parent : node, node, 'helper');
      },
      VariableDeclarator(node) {
        if (!['ArrowFunctionExpression', 'FunctionExpression'].includes(node.init?.type)) return;

        const declaration = node.parent;

        if (isExported(declaration, node.id.name)) {
          check(node, declaration.parent.type.startsWith('Export') ? declaration.parent : declaration, node.init, 'helper');
        }
      }
    };
  }
};
