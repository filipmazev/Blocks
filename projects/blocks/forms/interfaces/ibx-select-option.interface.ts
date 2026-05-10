import { ResolvableText } from "@filip.mazev/blocks/core";
import { IconName } from "@filip.mazev/blocks/icons";

export interface BxSelectOption<T> {
  label: ResolvableText;
  value: T;
  disabled?: boolean;
  icon?: IconName;
}