import { ResolvableText } from '@filip.mazev/blocks/core';
import { IErrorState } from '../interfaces/ierror-state.interface';
import { IValidationMessageContext } from '../interfaces/ivalidation-message-context.interface';

export type ValidationMessage = ResolvableText | ((context: IValidationMessageContext) => ResolvableText);
export type ValidationMessages = Readonly<Record<string, ValidationMessage | undefined>>;
export type ErrorDisplayPolicy = 'touched' | 'dirty' | 'submitted' | 'always' | ((state: IErrorState) => boolean);
export type ErrorDisplayMode = 'first' | 'all';
export type FloatLabel = 'auto' | 'always';
export type SubscriptSizing = 'fixed' | 'dynamic';
export type LabelPosition = 'before' | 'after';
export type FormFieldAppearance = 'fill' | 'outline';
export type HintAlignment = 'start' | 'end';
