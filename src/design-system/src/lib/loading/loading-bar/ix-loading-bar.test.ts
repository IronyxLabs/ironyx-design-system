import { loaderStore } from '$lib/services/loader.store.js';
import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import TestLoadingBar from '../../../__test_utils__/test_loading_bar.svelte';

describe('LDB - Loading Bar', () => {
	const createSUT = () => render(TestLoadingBar);

	const key = 'testLoadingBar';

	it('[UNIT][LDB-001]: Show Loading Bar', async () => {
		// Arrange
		const sut = createSUT();

		// Act
		loaderStore.provide(key).activate();
		await sut.rerender({});

		// Assert
		expect(sut.container.querySelector('.loader')).toBeInTheDocument();
		loaderStore.provide(key).deactivate();
	});

	it('[UNIT][LDB-002]: Hide Loading Bar', async () => {
		// Arrange
		const sut = createSUT();

		loaderStore.provide(key).activate();
		await sut.rerender({});

		// Act
		loaderStore.provide(key).deactivate();
		await sut.rerender({});

		// Assert
		expect(sut.container.querySelector('.loader')).not.toBeInTheDocument();
	});

	it('[UNIT][LDB-003]: Show Children', () => {
		// Arrange
		const sut = createSUT();

		loaderStore.provide(key).activate();
		sut.rerender({});

		// Act
		loaderStore.provide(key).deactivate();
		sut.rerender({});

		// Assert
		expect(sut.getByTestId('divChildren')).toBeInTheDocument();
	});
});
