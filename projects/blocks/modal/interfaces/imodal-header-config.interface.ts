import { IconData } from "@filip.mazev/blocks/icons";

/**
 * IModalHeaderConfig, the configuration for the modal header
 * @param {string} text The text to be shown in the header
 * @param {IconData} icon (optional) An icon to display to the left of the text, will default to undefined
 */
export interface IModalHeaderConfig {
  text: string;
  icon?: IconData;
}