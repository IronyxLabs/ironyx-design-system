import { ValidationStateHelper, type ValidationState } from "../../validation_state/validation_state.ts";
import type { IValidator } from "../validator.ts";

export class RequiredValidator<T> implements IValidator<T> {
  constructor(private readonly message: string = 'Field is required'){}
  
  validate(value: T | undefined): ValidationState {
    if (value === undefined || value === null || value === '') return ValidationStateHelper.invalid(this.message);

    return ValidationStateHelper.valid();
  }
  
}