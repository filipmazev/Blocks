export type DemoValue = string | number | boolean | null | undefined | readonly DemoValue[] | { readonly [key: string]: DemoValue };
export type DemoArgs = Readonly<Record<string, DemoValue>>;
export type DemoEditor = 'boolean' | 'number' | 'text' | 'select' | 'json' | 'documentation';
