import { IconData } from "@filip.mazev/blocks/icons";
import { ResolvableText } from "@filip.mazev/blocks/core";

/**
 * IModalHeaderConfig, the configuration for the modal header
 * @param {ResolvableText} text The text to be shown in the header as ResolvableText, this can be a string or an object with a translation key
 * @param {IconData} icon (optional) An icon to display to the left of the text, will default to undefined
 */
export interface IModalHeaderConfig {
  text: ResolvableText;
  icon?: IconData;
}