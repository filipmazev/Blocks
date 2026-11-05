import { isInjectedInitializer } from '../helpers/angular.helpers.mjs';

export default {
  meta: {
    type: 'suggestion',
    schema: [],
    messages: { annotation: 'Declare an explicit property type; Angular inject() references may retain their inferred token type.' }
  },
  create(context) {
    return {
      'PropertyDefinition, TSAbstractPropertyDefinition, AccessorProperty, TSAbstractAccessorProperty'(node) {
        if (!node.typeAnnotation && !isInjectedInitializer(context.sourceCode, node.value)) {
          context.report({ node: node.key, messageId: 'annotation' });
        }
      }
    };
  }
};
