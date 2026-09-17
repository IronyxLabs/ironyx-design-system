import { faker } from '@faker-js/faker';
import { describe, expect, it } from 'vitest';
import { ValidationStateFaker } from '../../../__test_utils/validation_state.faker.ts';
import { AbstractValidator, type ValidationState } from '../../../index.ts';

describe('ABV - AbstractValidator', () => {
	const createSut = (fn: (value: string) => ValidationState) => new AbstractValidator(fn);

	it('[UNIT][ABV-001]: Use validate function', () => {
		// Arrange
		const validationState = ValidationStateFaker.random();
		const sut = createSut(() => validationState);

		// Act
		var result = sut.validate(faker.string.alphanumeric());

		// Assert
		expect(result).toBe(validationState);
	});
});
