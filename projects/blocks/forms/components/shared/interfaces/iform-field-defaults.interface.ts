import { ErrorDisplayMode, ErrorDisplayPolicy, FloatLabel, FormFieldAppearance, SubscriptSizing, ValidationMessages } from '../types/validation.types';

/** Application-wide presentation defaults; instance inputs take precedence. */
export interface IFormFieldDefaults {
  /** Error visibility policy. Defaults to touched or submitted. */
  errorPolicy: ErrorDisplayPolicy;
  /** Number of automatic messages to render. Defaults to first. */
  errorMode: ErrorDisplayMode;
  /** Default messages or translated resolvers keyed by validation kind. */
  errorMessages: ValidationMessages;
  /** Filled or outlined field container. Defaults to fill. */
  appearance: FormFieldAppearance;
  /** Floating label behavior. Defaults to auto. */
  floatLabel: FloatLabel;
  /** Whether required markers are hidden. Defaults to false. */
  hideRequiredMarker: boolean;
  /** Reserved supporting-text space. Defaults to fixed. */
  subscriptSizing: SubscriptSizing;
  /** Enables automatic tooltips for clipped labels and values. Defaults to true; explicit instance inputs take precedence. */
  tooltipOnTruncate?: boolean;
}
