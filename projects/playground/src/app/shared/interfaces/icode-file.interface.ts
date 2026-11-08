import { CodeLanguage } from '@playground/types/common.types';

export interface ICodeFile {
  title: string;
  path: string;
  language: CodeLanguage;
  /** Optional live code; omission loads the generated snippet at path. */
  content?: string;
}
