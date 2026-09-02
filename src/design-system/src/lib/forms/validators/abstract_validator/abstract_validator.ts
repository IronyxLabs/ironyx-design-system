import type { IValidator, ValidationState } from '../../../index.ts';

export class AbstractValidator<T> implements IValidator<T> {
	private func: (value: T | undefined) => ValidationState;

	constructor(func: (value: T | undefined) => ValidationState) {
		this.func = func;
	}

	public validate(value: T | undefined): ValidationState {
		return this.func(value);
	}
}
