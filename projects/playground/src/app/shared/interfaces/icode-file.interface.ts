import { CodeLanguage } from "../types/common.types";

export interface ICodeFile {
    title: string;
    path: string;
    language: CodeLanguage;
}