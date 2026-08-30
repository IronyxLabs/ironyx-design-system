export interface ValidationState {
  isValid: boolean;
  error?: string;
}

export interface ValidationState {
	isValid: boolean;
	error?: string;
}

export const ValidationState = {
  valid(): ValidationState {
    return { isValid: true };
  },

  invalid(error: string): ValidationState {
    return { isValid: false, error: error };
  }
};