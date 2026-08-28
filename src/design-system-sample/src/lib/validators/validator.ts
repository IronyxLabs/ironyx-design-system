import { type ValidationState } from './validation-state';

export interface IValidator<T> {
	validate(value: T | undefined): ValidationState;
}
