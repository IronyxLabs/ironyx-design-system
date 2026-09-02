import { faker } from '@faker-js/faker';
import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import { BadgeVariant } from './badge__variant.ts';
import IxBadge from './ix_badge.svelte';

describe('IBD - IxBadge', () => {
	const createSut = (icon: string, label: string, variant = BadgeVariant.Neutral) =>
		render(IxBadge, {
			label: label,
			icon: icon,
			variant: variant
		});

	it('[UNIT][IBD-001]: Set Icon', () => {
		// Arrange
		const icon = faker.string.alpha();

		// Act
		const sut = createSut(icon, faker.string.alphanumeric());

		// Assert
		expect(sut.container.querySelector(`.${icon}`)).toBeInTheDocument();
	});

	it('[UNIT][IBD-002]: Set Label', () => {
		// Arrange
		const label = faker.string.alphanumeric();

		// Act
		const sut = createSut(faker.string.alpha(), label);

		// Assert
		expect(sut.getByText(label)).toBeInTheDocument();
	});

	it('[UNIT][IBD-003]: Primary badge', () => {
		// Act
		const sut = createSut(faker.string.alpha(), faker.string.alphanumeric(), BadgeVariant.Primary);

		// Assert
		expect(sut.container.querySelector(`.badge--primary`)).toBeInTheDocument();
	});

	it('[UNIT][IBD-004]: Neutral badge', () => {
		// Act
		const sut = createSut(faker.string.alpha(), faker.string.alphanumeric(), BadgeVariant.Neutral);

		// Assert
		expect(sut.container.querySelector(`.badge--neutral`)).toBeInTheDocument();
	});

	it('[UNIT][IBD-005]: Accent badge', () => {
		// Act
		const sut = createSut(faker.string.alpha(), faker.string.alphanumeric(), BadgeVariant.Accent);

		// Assert
		expect(sut.container.querySelector(`.badge--accent`)).toBeInTheDocument();
	});

	it('[UNIT][IBD-006]: Success badge', () => {
		// Act
		const sut = createSut(faker.string.alpha(), faker.string.alphanumeric(), BadgeVariant.Success);

		// Assert
		expect(sut.container.querySelector(`.badge--success`)).toBeInTheDocument();
	});

	it('[UNIT][IBD-007]: Warning badge', () => {
		// Act
		const sut = createSut(faker.string.alpha(), faker.string.alphanumeric(), BadgeVariant.Warning);

		// Assert
		expect(sut.container.querySelector(`.badge--warning`)).toBeInTheDocument();
	});

	it('[UNIT][IBD-008]: Error badge', () => {
		// Act
		const sut = createSut(faker.string.alpha(), faker.string.alphanumeric(), BadgeVariant.Error);

		// Assert
		expect(sut.container.querySelector(`.badge--error`)).toBeInTheDocument();
	});

	it('[UNIT][IBD-009]: Info badge', () => {
		// Act
		const sut = createSut(faker.string.alpha(), faker.string.alphanumeric(), BadgeVariant.Info);

		// Assert
		expect(sut.container.querySelector(`.badge--info`)).toBeInTheDocument();
	});
});
