export default {
  meta: {
    type: 'layout',
    fixable: 'whitespace',
    schema: [],
    messages: {
      privateMethod: 'Place private methods inside a //#region Helpers block.',
      blankAfter: 'Leave an empty line after a region opening.',
      blankBefore: 'Leave an empty line before a region closing.',
      unbalanced: 'Region openings and closings must be balanced.'
    }
  },
  create(context) {
    const sourceCode = context.sourceCode;
    const helpers = [];

    return {
      Program() {
        const stack = [];

        for (const comment of sourceCode.getAllComments()) {
          if (comment.type !== 'Line') {
            continue;
          }

          const opening = /^\s*#region\s+(.+?)\s*$/.exec(comment.value);
          const closing = /^\s*#endregion(?:\s+.*)?$/.test(comment.value);

          if (opening) {
            stack.push({ comment, name: opening[1] });

            if (sourceCode.lines[comment.loc.end.line]?.trim()) {
              context.report({
                loc: comment.loc,
                messageId: 'blankAfter',
                fix: (fixer) => fixer.insertTextAfterRange(comment.range, '\n')
              });
            }
          } else if (closing) {
            const region = stack.pop();

            if (!region) {
              context.report({ loc: comment.loc, messageId: 'unbalanced' });
            } else if (region.name === 'Helpers') {
              helpers.push([region.comment.range[1], comment.range[0]]);
            }

            if (sourceCode.lines[comment.loc.start.line - 2]?.trim()) {
              context.report({
                loc: comment.loc,
                messageId: 'blankBefore',
                fix: (fixer) => fixer.insertTextBeforeRange(comment.range, '\n')
              });
            }
          }
        }

        for (const region of stack) {
          context.report({ loc: region.comment.loc, messageId: 'unbalanced' });
        }
      },
      'MethodDefinition, TSAbstractMethodDefinition'(node) {
        if (node.kind === 'constructor' || (node.accessibility !== 'private' && node.key.type !== 'PrivateIdentifier')) {
          return;
        }

        const classBody = node.parent;
        const insideHelpers = helpers.some(
          ([start, end]) => classBody.range[0] < start && start < node.range[0] && node.range[1] < end && end < classBody.range[1]
        );

        if (!insideHelpers) {
          context.report({ node: node.key, messageId: 'privateMethod' });
        }
      }
    };
  }
};
