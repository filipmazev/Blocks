export type DemoValueSchema =
  | { kind: 'unknown' | 'string' | 'number' | 'boolean' | 'null' | 'undefined' | 'unsupported' }
  | { kind: 'literal'; value: string | number | boolean }
  | { kind: 'enum'; values: readonly (string | number)[] }
  | { kind: 'union'; choices: readonly DemoValueSchema[] }
  | { kind: 'array'; item: DemoValueSchema }
  | { kind: 'object'; properties: Readonly<Record<string, DemoValueSchema>>; required: readonly string[]; additional?: DemoValueSchema };
