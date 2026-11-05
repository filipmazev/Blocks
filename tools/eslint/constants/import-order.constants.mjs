export const IMPORT_GROUPS = [
  ['^\\u0000'],
  ['^node:.*'],
  ['^@angular/.*\\u0000$'],
  ['^@angular/'],
  ['^rxjs(?:/.*)?\\u0000$'],
  ['^rxjs(?:/|$)'],
  ['^(?![.]).*\\u0000$'],
  ['^@filip\\.mazev/blocks(?:/|$)'],
  ['^@(?:core|forms|modal|navigation|primitives|icons|toastr|playground)/'],
  ['^@?\\w'],
  ['^\\..*\\u0000$'],
  ['^\\.']
];
