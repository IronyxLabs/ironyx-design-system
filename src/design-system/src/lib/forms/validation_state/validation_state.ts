import { ValidationStatus } from "./validation_status.ts";

export interface ValidationState {
  status: ValidationStatus;
  error?: string;
}

export const ValidationStateHelper = {
  pending(): ValidationState {
    return { status: ValidationStatus.Pending };
  },
  
  valid(): ValidationState {
    return { status: ValidationStatus.Valid };
  },

  invalid(error: string): ValidationState {
    return { status: ValidationStatus.Invalid, error: error };
  }
};