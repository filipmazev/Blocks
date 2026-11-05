/** Dropdown transition preset; emerge remains a compatibility alias for fade. */
export type DropdownTransition = 'none' | 'fade' | 'emerge';

/** Lifecycle phase of the dropdown panel, including its retained entrance and exit states. */
export type DropdownState = 'closed' | 'opening' | 'open' | 'closing';
