import { faker } from '@faker-js/faker';
import { ValidationStatus } from '../forms/validation_state/validation_status.ts';
import type { ValidationState } from '../index.ts';

export class ValidationStateFaker {
	public static random(): ValidationState {
		return {
			status: faker.helpers.enumValue(ValidationStatus),
			error: faker.lorem.sentence()
		};
	}
}
