import { ValidationState } from "../validation_state/validation-state.ts";
import type { IValidator } from "../validator/validator.ts";

export class Field<T> {
  public value = $state<T>();

  private validators: IValidator[] = [];
  public validationState = $state<ValidationState>(ValidationState.valid());

  constructor(params: { validators?: IValidator[] } = { validators: [] }) {
    this.validators = params.validators ?? [];
  }

  public validate(): void {
    let i = 0;
    while (this.validationState.isValid && i < this.validators.length) {
      this.validationState = this.validators[i].validate();
      i++;
    }
  }
}