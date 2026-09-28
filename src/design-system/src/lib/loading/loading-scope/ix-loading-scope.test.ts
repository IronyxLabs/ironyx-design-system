import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import TestLoadingScope from '../../../__test_utils__/test_loading_scope.svelte';

describe('LOS - IxLoadingScope', () => {
	const createSUT = () => render(TestLoadingScope);

	it('[UNIT][LOS-001]: Set Context', () => {
		// Arrange
		// Act
		const sut = createSUT();

		// Assert
		expect(sut.getByTestId('divLoadingKey')).toHaveTextContent('TestLoadingScope');
	});
});
