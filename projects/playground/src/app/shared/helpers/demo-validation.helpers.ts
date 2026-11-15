import type { IDemoConstraint } from '@playground/interfaces/idemo-constraint.interface';
import type { DemoArgs } from '@playground/types/demo.types';
import type { DemoValueSchema } from '@playground/types/demo-schema.types';

/** Apply explicit numeric limits and relationships without embedding component names in the workbench. */
export function validateDemoConstraints(value: unknown, constraints: IDemoConstraint, args: DemoArgs): string | undefined {
  if (typeof value !== 'number') return undefined;

  const lower = constraints.minimumProperty ? args[constraints.minimumProperty] : constraints.minimum;
  const upper = constraints.maximumProperty ? args[constraints.maximumProperty] : constraints.maximum;

  if (constraints.integer && !Number.isInteger(value)) return 'Enter a whole number.';

  if (typeof lower === 'number' && value < lower) return `Enter a value of at least ${lower}.`;

  if (typeof upper === 'number' && value > upper) return `Enter a value no greater than ${upper}.`;

  return undefined;
}

/** Validate JSON editors against the same declaration types used to compile the preview. */
export function validateDemoValue(value: unknown, schema: DemoValueSchema, path: string): string | undefined {
  switch (schema.kind) {
    case 'unknown':
      return undefined;
    case 'unsupported':
      return `${path} requires an Angular value that cannot be edited as JSON.`;
    case 'undefined':
      return value === undefined ? undefined : `${path} must be omitted.`;
    case 'null':
      return value === null ? undefined : `${path} must be null.`;
    case 'literal':
      return value === schema.value ? undefined : `${path} must be ${JSON.stringify(schema.value)}.`;
    case 'string':
      return typeof value === 'string' ? undefined : `${path} must be a string.`;
    case 'number':
      return typeof value === 'number' && Number.isFinite(value) ? undefined : `${path} must be a finite number.`;
    case 'boolean':
      return typeof value === 'boolean' ? undefined : `${path} must be true or false.`;
    case 'union':
      return schema.choices.some((choice) => !validateDemoValue(value, choice, path)) ? undefined : `${path} does not match the documented type.`;
    case 'array': {
      if (!Array.isArray(value)) return `${path} must be an array.`;

      return value.map((item, index) => validateDemoValue(item, schema.item, `${path}[${index}]`)).find(Boolean);
    }

    case 'object': {
      if (!value || typeof value !== 'object' || Array.isArray(value)) return `${path} must be an object.`;

      const record = value as Record<string, unknown>;

      for (const key of schema.required) {
        if (!(key in record)) return `${path}.${key} is required.`;
      }

      for (const [key, item] of Object.entries(record)) {
        const property = Object.hasOwn(schema.properties, key) ? schema.properties[key] : schema.additional;

        if (!property) return `${path}.${key} is not a supported property.`;

        const error = validateDemoValue(item, property, `${path}.${key}`);

        if (error) return error;
      }

      return undefined;
    }
  }
}
