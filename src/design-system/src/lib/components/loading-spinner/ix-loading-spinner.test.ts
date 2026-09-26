import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import IxLoadingSpinner from './ix-loading-spinner.svelte';
import { loaderStore } from '$lib/services/loader.store.js';
import { faker } from '@faker-js/faker';

describe('LSP - Loading Spinner', () => {
	const createSUT = () => render(IxLoadingSpinner);

	it('[UNIT][LSP-001]: Show Loading Spinner', () => {
		// Act
		const key = faker.string.alpha();
		const sut = createSUT();

		// Arrange
		loaderStore.provide(key).activate();

		// Assert
		expect(sut.container.querySelector('.loader')).toBeInTheDocument();
	});

	it('[UNIT][LSP-002]: Hide Loading Spinner', () => {
		// Act
		const key = faker.string.alpha();
		const sut = createSUT();

		loaderStore.provide(key).activate();

		// Arrange
		loaderStore.provide(key).deactivate();

		// Assert
		expect(sut.container.querySelector('.loader')).not.toBeInTheDocument();
	});
});
