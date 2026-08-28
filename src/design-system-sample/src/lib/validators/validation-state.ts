export interface ValidationState {
	isValid: boolean;
	error?: string;
}

export const Valid = (): ValidationState => {
	return { isValid: true };
};

export const Invalid = (error: string): ValidationState => {
	return { isValid: false, error: error };
};
