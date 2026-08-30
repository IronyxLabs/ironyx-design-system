import type { Field } from "../field/field.svelte.ts";

export class FieldContext<T> {
  
  constructor(public readonly field: Field<T>, public readonly disabled: boolean) { }
}