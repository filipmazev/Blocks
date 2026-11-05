// Shared by ESLint and TypeScript generators so rebuilding preserves lint formatting.
export const typescriptFormatOptions = {
  printWidth: 160,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  arrowParens: 'always',
  bracketSameLine: true,
  endOfLine: 'lf',
  plugins: ['prettier-plugin-tailwindcss']
};
