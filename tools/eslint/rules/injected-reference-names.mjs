import { getInjectedReferenceName } from '../helpers/injection-names.helpers.mjs';

export default {
  meta: {
    type: 'suggestion',
    schema: [],
    messages: { name: "Name this injected reference '{{expected}}' to match {{source}}." }
  },
  create(context) {
    function check(name, initializer) {
      const actual = name?.type === 'Literal' ? name.value : name?.name;

      if (typeof actual !== 'string') return;

      const expected = getInjectedReferenceName(context.sourceCode, initializer);

      if (expected && actual !== expected.name) {
        context.report({ node: name, messageId: 'name', data: { expected: expected.name, source: expected.source } });
      }
    }

    return {
      'PropertyDefinition, AccessorProperty'(node) {
        if (!node.computed) check(node.key, node.value);
      },
      VariableDeclarator(node) {
        check(node.id, node.init);
      }
    };
  }
};
