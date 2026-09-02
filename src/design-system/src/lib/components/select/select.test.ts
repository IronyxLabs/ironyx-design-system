import { faker } from '@faker-js/faker';
import { fireEvent, render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import { OptionModelFaker } from '../../__test_utils/option-model.faker.ts';
import TestSelect from '../../__test_utils/test_select.svelte';
import { ValidatorFaker } from '../../__test_utils/validator.faker.ts';
import type { IValidator } from '../../forms/validators/validator.ts';

describe('ISC - IxSelect', () => {
	const createSut = (
		icon?: string,
		options = [OptionModelFaker.random()],
		validator: IValidator<string> = ValidatorFaker.valid(),
		disabled = false
	) =>
		render(TestSelect, {
			icon: icon,
			validator: validator,
			options: options,
			disabled: disabled
		});

	it('[UNIT][ISC-001]: Show icon', () => {
		// Arrange
		const icon = faker.string.alpha();

		// Act
		const sut = createSut(icon);

		// Assert
		expect(sut.container.querySelector(`.${icon}`)).toBeInTheDocument();
	});

	it('[UNIT][ISC-002]: Invalidate component', async () => {
		// Arrange
		const option = OptionModelFaker.enabled();
		const sut = createSut(
			faker.string.alphanumeric(),
			[OptionModelFaker.enabled(), option],
			ValidatorFaker.invalid()
		);

		// Act
		await fireEvent.change(sut.container.querySelector('select')!, {
			target: { value: option.id }
		});

		// Assert
		expect(sut.container.querySelector(`.select`)?.getAttribute('invalid')).toBe('true');
	});

	it('[UNIT][ISC-003]: Disable component', async () => {
		// Act
		const sut = createSut(
			faker.string.alphanumeric(),
			[OptionModelFaker.enabled()],
			ValidatorFaker.valid(),
			true
		);

		// Assert
		expect(sut.container.querySelector(`select`)).toBeDisabled();
	});
});
