import { Invalid, Valid, type ValidationState } from './validation-state';
import type { IValidator } from './validator';

export class EmptyValidator implements IValidator<string> {
	private message: string;

	constructor(message: string = 'Field cannot be empty') {
		this.message = message;
	}

	validate(value: string | undefined): ValidationState {
		if (value !== '') return Valid();

		return Invalid(this.message);
	}
}
