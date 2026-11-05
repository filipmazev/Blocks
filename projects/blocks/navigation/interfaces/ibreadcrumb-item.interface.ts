/**
 * Describes the breadcrumb item contract.
 */
export interface IBreadcrumbItem {
  /** Visible or resolved label presented to the user. */
  label: string;
  /** Router destination associated with this navigation entry. */
  route: string;
}
