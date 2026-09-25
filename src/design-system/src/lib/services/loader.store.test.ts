import { faker } from '@faker-js/faker';
import { describe, expect, it } from 'vitest';
import { LoaderStore } from './loader.store.ts';

describe('LDS - Loader Store', () => {
	const createSUT = () => new LoaderStore();

	it('[UNIT][LDS-001]: Provide not existing Loader', () => {
		// Arrange
		const key = faker.string.alpha();
		const sut = createSUT();

		// Act
		const result = sut.provide(key);

		// Assert
		expect(result).toBeDefined();
	});

	it('[UNIT][LDS-001]: Provide existing Loader', () => {
		// Arrange
		const key = faker.string.alpha();
		const sut = createSUT();

		const loader = sut.provide(key);

		// Act
		const result = sut.provide(key);

		// Assert
		expect(result).toBe(loader);
	});
});
