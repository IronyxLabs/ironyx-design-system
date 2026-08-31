import { ValidationStateHelper, type ValidationState } from "../validation_state/validation_state.ts";
import { ValidationStatus } from "../validation_state/validation_status.ts";
import type { IValidator } from "../validators/validator.ts";

export class Field<T> {
  public value = $state<T>();

  private validators: IValidator<T>[] = [];
  public validationState : ValidationState;

  public get valid(): boolean {
    return this.validationState.status === ValidationStatus.Valid;
  }
  public get invalid(): boolean {
    return this.validationState.status === ValidationStatus.Invalid;
  }

  constructor(params: { validators?: IValidator<T>[] } = { validators: [] }) {
    this.validators = params.validators ?? [];

    this.validationState = $state<ValidationState>(this.validators.length === 0 ? ValidationStateHelper.valid() : ValidationStateHelper.pending());
  }

  public validate(): void {
    if (this.validators.length === 0) return;
    
    let i = 0;    
    this.validationState = ValidationStateHelper.pending();
    while (!this.invalid && i < this.validators.length) {
      this.validationState = this.validators[i].validate(this.value);
      i++;
    }
  }
}