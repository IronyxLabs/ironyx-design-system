import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import { loaderStore } from '$lib/services/loader.store.js';
import TestLoadingSpinner from '../../../__test_utils__/test_loading_spinner.svelte';

describe('LSP - Loading Spinner', () => {
  const key = 'loadingSpinnerTest';
  const createSUT = () => render(TestLoadingSpinner);

  it('[UNIT][LSP-001]: Show Loading Spinner', () => {
    // Act
    const sut = createSUT();

    // Arrange
    loaderStore.provide(key).activate();
    sut.rerender({});

    // Assert
    expect(sut.container.querySelector('.loader')).toBeInTheDocument();
    loaderStore.provide(key).deactivate();
  });

  it('[UNIT][LSP-002]: Hide Loading Spinner', () => {
    // Act
    const sut = createSUT();

    loaderStore.provide(key).activate();
    sut.rerender({});

    // Arrange
    loaderStore.provide(key).deactivate();
    sut.rerender({});

    // Assert
    expect(sut.container.querySelector('.loader')).not.toBeInTheDocument();
  });

  it('[UNIT][LSP-003]: Show Children', () => {
    // Act
    const sut = createSUT();

    loaderStore.provide(key).activate();
    sut.rerender({});

    // Arrange
    loaderStore.provide(key).deactivate();
    sut.rerender({});

    // Assert
    expect(sut.getByTestId('divTestContent')).toBeInTheDocument();
  });
});
