/** Read values of the declaration-derived signal input keys selected by each story. */
export type DemoInputs<T> = {
  [K in keyof T]: T[K] extends () => infer V ? V : never;
};
