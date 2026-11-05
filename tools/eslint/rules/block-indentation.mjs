export default {
  meta: {
    type: 'layout',
    fixable: 'whitespace',
    schema: [],
    messages: { indent: 'Indent the contents of this brace block by two spaces.' }
  },
  create(context) {
    const source = context.sourceCode;

    return {
      'BlockStatement, ClassBody, TSInterfaceBody, TSTypeLiteral, TSModuleBlock, ObjectExpression, ObjectPattern'(node) {
        const opening = source.getFirstToken(node);
        const members = node.body ?? node.members ?? node.properties;

        if (opening?.value !== '{' || !Array.isArray(members)) {
          return;
        }

        const parentIndent = source.lines[opening.loc.start.line - 1].match(/^ */)[0].length;
        const expected = parentIndent + 2;

        for (const member of members) {
          if (member.loc.start.line === opening.loc.start.line) {
            continue;
          }

          const line = source.lines[member.loc.start.line - 1];
          const leading = line.match(/^[\t ]*/)[0];

          if (line.slice(leading.length, member.loc.start.column).trim() || (leading.startsWith(' '.repeat(expected)) && !leading.includes('\t'))) {
            continue;
          }

          const start = member.range[0] - member.loc.start.column;

          context.report({
            node: member,
            messageId: 'indent',
            fix: (fixer) => fixer.replaceTextRange([start, start + leading.length], ' '.repeat(expected))
          });
        }
      }
    };
  }
};
