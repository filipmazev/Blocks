import { CodeLanguage } from '@playground/types/common.types';

export interface ICodeFile {
  title: string;
  path: string;
  language: CodeLanguage;
}
