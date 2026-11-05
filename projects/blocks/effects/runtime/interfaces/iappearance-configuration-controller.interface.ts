import type { IAppearanceConfiguration } from './iappearance-configuration.interface';
/**
 * Describes the appearance configuration controller contract.
 */
export interface IAppearanceConfigurationController {
  /** Merge a partial application-wide configuration. */
  update(options: IAppearanceConfiguration): void;
  /** Releases observers, listeners and rendering resources owned by this instance. */
  destroy(): void;
}
