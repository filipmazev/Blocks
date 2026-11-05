import { getAngularImport } from '../helpers/angular.helpers.mjs';

export default {
  meta: {
    type: 'suggestion',
    schema: [],
    messages: {
      decorator: 'Use signal input/output/query functions instead of the {{name}} decorator, including aliased or namespace imports.'
    }
  },
  create(context) {
    return {
      Decorator(node) {
        const expression = node.expression.type === 'CallExpression' ? node.expression.callee : node.expression;
        const name = getAngularImport(context.sourceCode, expression);

        if (['Input', 'Output', 'ViewChild', 'ViewChildren', 'ContentChild', 'ContentChildren'].includes(name)) {
          context.report({ node, messageId: 'decorator', data: { name } });
        }
      }
    };
  }
};
