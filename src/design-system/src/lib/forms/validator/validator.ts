import type { ValidationState } from "../validation_state/validation-state.ts";

export interface IValidator {
  validate(): ValidationState;
}