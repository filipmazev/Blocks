import { typescriptFormatOptions } from './tools/typescript-format-options.mjs';

export default {
  ...typescriptFormatOptions,
  overrides: [
    {
      files: '*.{html,scss,css,sass,less,json,jsonc,md,yml,yaml}',
      options: { tabWidth: 4 }
    },
    {
      files: '*.md',
      options: { proseWrap: 'always' }
    },
    {
      files: '*.html',
      options: { parser: 'angular' }
    }
  ]
};
