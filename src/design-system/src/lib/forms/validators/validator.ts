import type { ValidationState } from "../validation_state/validation_state.ts";

export interface IValidator<T> {
  validate(value: T | undefined): ValidationState;
}