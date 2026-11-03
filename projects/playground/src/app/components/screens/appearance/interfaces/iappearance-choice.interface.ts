/** A typed appearance control option. */
export interface IAppearanceChoice<T extends string> {
  readonly value: T;
  readonly label: string;
  /** Optional supporting text shown below the option label. */
  readonly description?: string;
}
