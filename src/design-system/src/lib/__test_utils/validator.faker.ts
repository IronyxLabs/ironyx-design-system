import { faker } from '@faker-js/faker';
import { vi } from 'vitest';
import { ValidationStatus } from '../forms/validation_state/validation_status.ts';
import type { IValidator } from '../index.ts';

export class ValidatorFaker {
	public static random(): IValidator<string> {
		return {
			validate: vi.fn().mockReturnValue({
				status: faker.helpers.enumValue(ValidationStatus),
				error: faker.string.alphanumeric()
			})
		};
	}

	public static valid(): IValidator<string> {
		const result = ValidatorFaker.random();
		result.validate = vi.fn().mockReturnValue({
			status: ValidationStatus.Valid
		});

		return result;
	}

	public static invalid(): IValidator<string> {
		const result = ValidatorFaker.random();
		result.validate = vi.fn().mockReturnValue({
			status: ValidationStatus.Invalid,
			error: faker.string.alphanumeric()
		});

		return result;
	}
}
