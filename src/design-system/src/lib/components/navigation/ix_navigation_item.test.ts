import { render } from '@testing-library/svelte';
import IxNavigationItem from './ix_navigation_item.svelte';
import { faker } from '@faker-js/faker';
import { describe, expect, it } from 'vitest';

describe('NAV - IxNavigation', () => {
	const createSUT = (label: string, icon: string, path: string) =>
		render(IxNavigationItem, {
			label: label,
			icon: icon,
			path: path
		});

	it('[UNIT][NAV-001]: Show label', () => {
		// Arrange
		const label = faker.string.alphanumeric();

		// Act
		const sut = createSUT(label, '', '');

		// Assert
		expect(sut.getByText(label)).toBeInTheDocument();
	});

	it('[UNIT][NAV-002]: Show icon', () => {
		// Arrange
		const icon = faker.string.alphanumeric();

		// Act
		const sut = createSUT('', icon, '');

		// Assert
		expect(sut.container.querySelector('i')).toHaveClass(icon);
	});
});
