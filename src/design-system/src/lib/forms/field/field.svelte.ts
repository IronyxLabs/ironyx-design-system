import { ValidationStateHelper, type ValidationState } from "../validation_state/validation_state.ts";
import { ValidationStatus } from "../validation_state/validation_status.ts";
import type { IValidator } from "../validators/validator.ts";

export class Field<T> {
  private initialized = false;
  
  public value = $state<T>();

  private validators: IValidator<T>[] = [];
  public validationState = $state<ValidationState>(ValidationStateHelper.pending());

  public get valid(): boolean {
    return this.validationState.status === ValidationStatus.Valid;
  }
  public get invalid(): boolean {
    return this.validationState.status === ValidationStatus.Invalid;
  }

  constructor(params: { validators?: IValidator<T>[] } = { validators: [] }) {
    this.validators = params.validators ?? [];

    $effect(() => this.validate());
  }

  public validate() {       
    const value = this.value;

    if (this.validators.length === 0) {
      this.initialized = true;
      this.validationState = ValidationStateHelper.valid();
      return;
    }
    
    if (!this.initialized)
    {
      this.initialized = true;
      return;
    }
    
    for (const validator of this.validators) {
      const result = validator.validate(value);
      if (result.status === ValidationStatus.Invalid) {
        this.validationState = result;
        return;
      }
    }    

    this.validationState = ValidationStateHelper.valid();
  }
}