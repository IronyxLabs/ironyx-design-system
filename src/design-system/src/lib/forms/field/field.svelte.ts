import { ValidationStateHelper, type ValidationState } from "../validation_state/validation_state.ts";
import type { IValidator } from "../validators/validator.ts";

export class Field<T> {
  public value = $state<T>();

  private validators: IValidator<T>[] = [];
  public validationState = $state<ValidationState>(ValidationStateHelper.valid());

  constructor(params: { validators?: IValidator<T>[] } = { validators: [] }) {
    this.validators = params.validators ?? [];
  }

  public validate(): void {
    let i = 0;
    this.validationState = ValidationStateHelper.valid();
    while (this.validationState.isValid && i < this.validators.length) {
      this.validationState = this.validators[i].validate(this.value);
      i++;
    }
  }
}