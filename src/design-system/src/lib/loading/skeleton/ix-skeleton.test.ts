import { describe, expect, it } from 'vitest';
import IxSkeleton from './ix-skeleton.svelte';
import { render } from '@testing-library/svelte';
import { faker } from '@faker-js/faker';
import { loaderStore } from '$lib/services/loader.store.js';

describe('SKL - IxSkeleton', () => {
	const createSUT = (key: string) => render(IxSkeleton, { key: key });

	it('[UNIT][SKL-001]: Show Skeleton', () => {
		// Arrange
		const key = faker.string.alpha();
		const sut = createSUT(key);

		// Act
		loaderStore.provide(key).activate();
		sut.rerender({});

		// Assert
		expect(sut.container.querySelector('.skeleton')).toBeInTheDocument();
	});

	it('[UNIT][SKL-002]: Hide Skeleton', () => {
		// Arrange
		const key = faker.string.alpha();
		const sut = createSUT(key);

		loaderStore.provide(key).activate();
		sut.rerender({});

		// Act
		loaderStore.provide(key).deactivate();
		sut.rerender({});

		// Assert
		expect(sut.container.querySelector('.skeleton')).not.toBeInTheDocument();
	});
});
