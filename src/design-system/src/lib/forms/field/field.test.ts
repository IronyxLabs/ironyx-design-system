import { expect, describe, it, vi } from 'vitest';
import { render, fireEvent } from "@testing-library/svelte";
import TestField from "../../__test_utils/test_field.svelte";
import { faker } from '@faker-js/faker';
import { ValidationStateHelper } from '../validation_state/validation_state.ts';
import type { IValidator } from '../validators/validator.ts';

describe('FLD - Field', () => {
  const createSut = (validator: IValidator<string>) => render(TestField, {
    validator: validator
  });
  
  it('[UNIT][FLD-001]: Validate', () => {
    // Act
    const error = faker.lorem.sentence();
    const sut = createSut({ validate: vi.fn().mockReturnValue(ValidationStateHelper.invalid(error)) });
    
    // Arrange
    setInput(sut.container, faker.string.alphanumeric());
    
    // Assert
    expect(sut.getByText(error)).toBeInTheDocument();
  })
  
  it('[UNIT][FLD-002]: Check Validity if invalid', () => {
    // Act
    const error = faker.lorem.sentence();
    const sut = createSut({ validate: vi.fn().mockReturnValue(ValidationStateHelper.invalid(error)) });
    
    // Arrange
    setInput(sut.container, faker.string.alphanumeric());
    
    // Assert
    expect(sut.queryByText('Valid')).not.toBeInTheDocument();
    expect(sut.getByText('Invalid')).toBeInTheDocument();
  })
  
  it('[UNIT][FLD-003]: Check Validity if valid', () => {
    // Act
    const sut = createSut({ validate: vi.fn().mockReturnValue(ValidationStateHelper.valid()) });
    
    // Arrange
    setInput(sut.container, faker.string.alphanumeric());
    
    // Assert
    expect(sut.getByText('Valid')).toBeInTheDocument();
    expect(sut.queryByText('Invalid')).not.toBeInTheDocument();
  })
  
  it('[UNIT][FLD-004]: Check Validity after initialize', () => {
    // Arrange
    const sut = createSut({ validate: vi.fn().mockReturnValue(ValidationStateHelper.valid()) });
    
    // Assert
    expect(sut.queryByText('Valid')).not.toBeInTheDocument();
    expect(sut.queryByText('Invalid')).not.toBeInTheDocument();
  })
})

const setInput = (container: HTMLElement, value: string) => {
  fireEvent.input(container.querySelector<HTMLInputElement>('input')!, { target: { value: value } });
}