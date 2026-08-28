import { Valid, type ValidationState } from '$lib/validators/validation-state';
import type { IValidator } from '$lib/validators/validator';

export class Field<T> {
	value: T | undefined = $state<T>();

	validators: IValidator<T>[];
	validationState: ValidationState = $state(Valid());

	constructor(...validators: IValidator<T>[]) {
		this.validators = validators ?? [];
	}

	public validate(): void {
		let i = 0;
		while (i < this.validators.length || !this.validationState.isValid) {
			this.validationState = this.validators[i].validate(this.value);
			i++;
		}
	}
}
