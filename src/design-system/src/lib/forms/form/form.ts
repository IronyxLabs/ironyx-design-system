import type { Field } from "../field/field.svelte.ts";

export class Form<T extends  { [s: string]: Field<unknown>; }> {
  public fields: T;

  public get isValid(): boolean {
    return Object.values(this.fields).every(f => f.validationState.isValid);
  }
  
  constructor(fields: T) {
    this.fields = fields;
  }
}