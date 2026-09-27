import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import IxLoadingBar from './ix-loading-bar.svelte';
import { faker } from '@faker-js/faker';
import { loaderStore } from '$lib/services/loader.store.js';

describe('LDB - Loading Bar', () => {
	const createSUT = (key: string) => render(IxLoadingBar, { key: key });

	it('[UNIT][LDB-001]: Show Loading Bar', () => {
		// Arrange
		const key = faker.string.alpha();
		const sut = createSUT(key);

		// Act
		loaderStore.provide(key).activate();
		sut.rerender({});

		// Assert
		expect(sut.container.querySelector('.loader')).toBeInTheDocument();
	});

	it('[UNIT][LDB-002]: Hide Loading Bar', () => {
		// Arrange
		const key = faker.string.alpha();
		const sut = createSUT(key);

		loaderStore.provide(key).activate();
		sut.rerender({});

		// Act
		loaderStore.provide(key).deactivate();
		sut.rerender({});

		// Assert
		expect(sut.container.querySelector('.loader')).not.toBeInTheDocument();
	});
});
