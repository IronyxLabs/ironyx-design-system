import { Field } from "./field.svelte.ts";
import { faker } from "@faker-js/faker";
import type { IValidator } from "../validators/validator.ts";
import { expect, vi, describe, it } from 'vitest';
import { ValidationStateHelper } from "../validation_state/validation_state.ts";

describe('Field', () => {
  const createSut = (validators: IValidator[]) => new Field<string>({ validators: validators });
  
  it('[UNIT][FLD-001]: Validate', () => {
    // Act
    const validator = {
      validate: vi.fn().mockReturnValue(ValidationStateHelper.valid())
    };
    const sut = createSut([validator, validator]);
    const value = faker.string.alphanumeric();
    
    sut.value = value;

    const spy = vi.spyOn(validator, 'validate');
    
    // Arrange
    sut.validate();
    
    // Assert
    expect(spy).toHaveBeenCalledTimes(2);
  })

  it('[UNIT][FLD-002]: Set Validation State', () => {
    // Act
    const error = faker.lorem.sentence();
    const validator = {
      validate: vi.fn().mockReturnValue(ValidationStateHelper.invalid(error))
    };
    const sut = createSut([validator]);
    
    // Arrange
    sut.validate();
    
    // Assert
    expect(sut.validationState.isValid).toBeFalsy();
    expect(sut.validationState.error).toEqual(error);
  })
})