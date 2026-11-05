export default {
  '*.{ts,html}': [() => 'npm run lint:angular', 'eslint --max-warnings=0'],
  '*.{scss,css}': ['stylelint --allow-empty-input --max-warnings 0', 'prettier --check'],
  '*.{js,cjs,mjs}': ['eslint --max-warnings=0', 'prettier --check'],
  '*.{json,jsonc,md,yml,yaml}': 'prettier --check',
  '*': (files) => (files.some((file) => /\.(ts|html)$/.test(file)) ? ['npm run lint:angular'] : [])
};
