import type { Field } from "../field/field.svelte.ts";

export class Form<T extends  { [s: string]: Field<unknown>; }> {
  public fields: T;

  public valid: boolean;
  public invalid: boolean
  
  constructor(fields: T) {
    this.fields = fields;

    this.valid = $derived(Object.values(this.fields).every(f => f.valid));
    this.invalid = $derived(Object.values(this.fields).some(f => f.invalid));
  }
}