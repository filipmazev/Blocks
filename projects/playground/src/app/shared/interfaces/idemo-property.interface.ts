import type { DemoEditor, DemoValue } from '@playground/types/demo.types';
import type { DemoValueSchema } from '@playground/types/demo-schema.types';

import type { IDemoConstraint } from './idemo-constraint.interface';

export interface IDemoProperty {
  name: string;
  binding: string;
  kind: 'input' | 'model' | 'output' | 'method' | 'property';
  type: string;
  description: string;
  defaultExpression: string;
  defaultValue?: DemoValue;
  options?: readonly (string | number)[];
  editor: DemoEditor;
  required: boolean;
  nullable: boolean;
  optional: boolean;
  schema?: DemoValueSchema;
  constraints?: IDemoConstraint;
}
