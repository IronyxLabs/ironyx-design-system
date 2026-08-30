import { describe, expect, it } from "vitest";
import { RequiredValidator } from "./required_validator.ts";
import { faker } from "@faker-js/faker";

describe('RequiredValidator', () => {
  const createSut = (message?: string) => new RequiredValidator<string>(message);
  
  it('[UNIT][RQV-001]: Value is undefined', () => {
    // Arrange
    const sut = createSut();
    
    // Act
    const result = sut.validate(undefined);
    
    // Assert
    expect(result.isValid).toBeFalsy();
  })
  
  it('[UNIT][RQV-002]: Valid value', () => {
    // Arrange
    const sut = createSut();
    
    // Act
    const result = sut.validate(faker.string.alphanumeric());
    
    // Assert
    expect(result.isValid).toBeTruthy();
  })
  
  it('[UNIT][RQV-003]: Use message', () => {
    // Arrange
    const error = faker.string.alphanumeric();
    const sut = createSut(error);
    
    // Act
    const result = sut.validate(undefined);
    
    // Assert
    expect(result.error).toEqual(error);
  })
})