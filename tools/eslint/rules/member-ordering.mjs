import { isInjectedInitializer } from '../helpers/angular.helpers.mjs';
import { getMemberRank } from '../helpers/member.helpers.mjs';

export default {
  meta: {
    type: 'suggestion',
    schema: [],
    messages: {
      order:
        "Place '{{name}}' before '{{previous}}': injections, readonly fields by visibility and API purpose, mutable fields, constructor, lifecycle hooks, public, protected, then private methods.",
      readonlyInject: 'Angular inject() fields must be readonly.'
    }
  },
  create(context) {
    return {
      ClassBody(node) {
        let previous;
        let previousRank = -1;

        for (const member of node.body) {
          const rank = getMemberRank(context.sourceCode, member);

          if (isInjectedInitializer(context.sourceCode, member.value) && !member.readonly) {
            context.report({ node: member, messageId: 'readonlyInject' });
          }

          if (rank === undefined) {
            continue;
          }

          if (rank < previousRank) {
            context.report({
              node: member,
              messageId: 'order',
              data: {
                name: context.sourceCode.getText(member.key),
                previous: context.sourceCode.getText(previous.key)
              }
            });
          } else {
            previous = member;
            previousRank = rank;
          }
        }
      }
    };
  }
};
