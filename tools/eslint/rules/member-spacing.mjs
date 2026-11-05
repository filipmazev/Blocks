import { getMemberGroup } from '../helpers/member.helpers.mjs';

export default {
  meta: {
    type: 'layout',
    fixable: 'whitespace',
    schema: [],
    messages: {
      grouped: 'Keep fields in the same visibility/API group together without empty lines.',
      separated: 'Separate member groups and methods with one empty line.',
      boundary: 'Do not add empty lines just inside a class brace.'
    }
  },
  create(context) {
    const source = context.sourceCode;
    const checkGap = (start, end, blankLines, node, messageId) => {
      const gap = source.text.slice(start, end);

      if (!/^\s*$/.test(gap) || !gap.includes('\n') || (gap.match(/\n/g)?.length ?? 0) === blankLines + 1) {
        return;
      }

      const indent = gap.slice(gap.lastIndexOf('\n') + 1);

      context.report({ node, messageId, fix: (fixer) => fixer.replaceTextRange([start, end], '\n'.repeat(blankLines + 1) + indent) });
    };

    return {
      ClassBody(node) {
        if (!node.body.length) {
          return;
        }

        const first = source.getTokenAfter(source.getFirstToken(node), { includeComments: true });
        const last = source.getTokenBefore(source.getLastToken(node), { includeComments: true });

        checkGap(node.range[0] + 1, first.range[0], 0, node.body[0], 'boundary');
        checkGap(last.range[1], node.range[1] - 1, 0, node.body.at(-1), 'boundary');

        for (let index = 1; index < node.body.length; index++) {
          const previous = node.body[index - 1];
          const current = node.body[index];
          const comments = source.getCommentsBefore(current).filter((comment) => comment.range[0] >= previous.range[1]);
          const leading = comments.find((comment) => comment.loc.start.line > previous.loc.end.line) ?? current;
          const previousGroup = getMemberGroup(source, previous);
          const grouped = previousGroup !== undefined && previousGroup === getMemberGroup(source, current);
          const trailing = comments.filter((comment) => comment.loc.start.line === previous.loc.end.line).at(-1);

          checkGap(trailing?.range[1] ?? previous.range[1], leading.range[0], grouped ? 0 : 1, current, grouped ? 'grouped' : 'separated');
        }
      }
    };
  }
};
