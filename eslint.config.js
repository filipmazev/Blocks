const eslint = require('@eslint/js');
const angular = require('angular-eslint');
const prettierRecommended = require('eslint-plugin-prettier/recommended');
const tseslint = require('typescript-eslint');

const { default: blocks } = require('./tools/eslint/plugin.mjs');
const { IMPORT_GROUPS } = require('./tools/eslint/constants/import-order.constants.mjs');
const { readPathAliases } = require('./tools/paths/helpers/path-alias.helpers.mjs');

const tsFiles = ['**/*.ts'];
const htmlFiles = ['**/*.html'];

module.exports = [
  {
    ignores: ['.angular/**', 'dist/**', 'coverage/**', 'node_modules/**', 'scripts/**', 'out-tsc/**', 'tmp/**', 'playwright-report/**', 'test-results/**']
  },
  { ...eslint.configs.recommended, files: tsFiles },
  ...tseslint.configs.strict.map((config) => ({ ...config, files: tsFiles })),
  ...angular.configs.tsRecommended.map((config) => ({ ...config, files: tsFiles })),
  { ...prettierRecommended, files: [...tsFiles, ...htmlFiles, '**/*.{js,mjs,cjs}'] },
  {
    files: tsFiles,
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.eslint.json'],
        tsconfigRootDir: __dirname
      }
    },
    plugins: { blocks },
    processor: angular.processInlineTemplates,
    linterOptions: { reportUnusedDisableDirectives: 'error' },
    rules: {
      '@angular-eslint/prefer-on-push-component-change-detection': 'off',
      '@angular-eslint/prefer-inject': 'error',
      '@angular-eslint/prefer-signals': ['error', { useTypeChecking: true }],
      '@angular-eslint/prefer-output-emitter-ref': 'error',
      '@angular-eslint/prefer-output-readonly': 'error',
      '@angular-eslint/no-uncalled-signals': 'error',
      '@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: ['app', 'bx'], style: 'camelCase' }],
      '@angular-eslint/component-selector': ['error', { type: 'element', prefix: ['app', 'bx'], style: 'kebab-case' }],
      '@typescript-eslint/member-ordering': 'off',
      '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'explicit', overrides: { constructors: 'no-public' } }],
      '@typescript-eslint/typedef': ['error', { propertyDeclaration: true }],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          reportUsedIgnorePattern: true
        }
      ],
      'no-unused-private-class-members': 'off',
      '@typescript-eslint/no-unused-private-class-members': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'classProperty', modifiers: ['private'], format: ['camelCase'], leadingUnderscore: 'allow' },
        { selector: 'classProperty', modifiers: ['protected'], format: ['camelCase'], leadingUnderscore: 'allow' },
        { selector: 'interface', format: ['PascalCase'], custom: { regex: '^I[A-Z]', match: true } },
        { selector: 'variable', format: ['camelCase', 'UPPER_CASE'], leadingUnderscore: 'allow' }
      ],
      'blocks/member-ordering': 'error',
      'blocks/member-spacing': 'error',
      'blocks/block-indentation': 'error',
      'blocks/explicit-property-types': 'error',
      'blocks/injected-reference-names': 'error',
      'blocks/modern-angular-apis': 'error',
      'blocks/helpers-regions': 'error',
      'blocks/ordered-imports': ['error', { groups: IMPORT_GROUPS }],
      'sort-imports': 'off',
      'no-duplicate-imports': ['error', { allowSeparateTypeImports: true }],
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-object-spread': 'error',
      'no-else-return': 'error',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: ['const', 'let', 'var'] },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'any', prev: 'const', next: 'const' },
        { blankLine: 'any', prev: 'let', next: 'let' },
        { blankLine: 'any', prev: 'var', next: 'var' },
        { blankLine: 'always', prev: '*', next: ['if', 'for', 'while', 'do', 'switch', 'try', 'return', 'throw'] },
        { blankLine: 'always', prev: ['block-like', 'if', 'for', 'while', 'do', 'switch', 'try'], next: '*' }
      ],
      'lines-between-class-members': 'off'
    }
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { blocks },
    rules: { 'blocks/ordered-imports': ['error', { groups: IMPORT_GROUPS }] }
  },
  {
    files: ['projects/blocks/**/*.ts'],
    rules: { 'blocks/documented-interfaces': 'error', 'blocks/documented-public-api': 'error', 'blocks/declaration-layout': 'error' }
  },
  {
    files: ['projects/**/*.ts'],
    rules: { 'blocks/prefer-path-aliases': ['error', { aliases: readPathAliases(__dirname) }] }
  },
  ...angular.configs.templateRecommended.map((config) => ({ ...config, files: htmlFiles })),
  ...angular.configs.templateAccessibility.map((config) => ({ ...config, files: htmlFiles })),
  {
    files: htmlFiles,
    rules: {
      '@angular-eslint/template/attributes-order': 'error',
      '@angular-eslint/template/button-has-type': 'error',
      '@angular-eslint/template/no-any': 'error',
      '@angular-eslint/template/no-duplicate-attributes': ['error', { allowStylePrecedenceDuplicates: true }],
      '@angular-eslint/template/no-interpolation-in-attributes': 'error',
      '@angular-eslint/template/prefer-control-flow': 'error',
      '@angular-eslint/template/prefer-static-string-properties': 'error'
    }
  }
];
