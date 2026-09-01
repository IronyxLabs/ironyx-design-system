import { describe, expect, it } from "vitest";
import { RequiredValidator } from "./required_validator.ts";
import { faker } from "@faker-js/faker";
import { ValidationStatus } from "../../../forms/validation_state/validation_status.ts";

describe('RQV - RequiredValidator', () => {
  const createSut = (message?: string) => new RequiredValidator<string>(message);
    
  it('[UNIT][RQV-001]: Valid value', () => {
    // Arrange
    const sut = createSut();
    
    // Act
    const result = sut.validate(faker.string.alphanumeric());
    
    // Assert
    expect(result.status).toEqual(ValidationStatus.Valid);
  })
  
  it('[UNIT][RQV-002]: Value is undefined', () => {
    // Arrange
    const sut = createSut();
    
    // Act
    const result = sut.validate(undefined);
    
    // Assert
    expect(result.status).toEqual(ValidationStatus.Invalid);
  })
  
  it('[UNIT][RQV-003]: Value is null', () => {
    // Arrange
    const sut = createSut();
    
    // Act
    const result = sut.validate(null);
    
    // Assert
    expect(result.status).toEqual(ValidationStatus.Invalid);
  })
  
  it('[UNIT][RQV-004]: Value is empty', () => {
    // Arrange
    const sut = createSut();
    
    // Act
    const result = sut.validate('');
    
    // Assert
    expect(result.status).toEqual(ValidationStatus.Invalid);
  })
  
  it('[UNIT][RQV-005]: Use default message', () => {
    // Arrange
    const sut = createSut();
    
    // Act
    const result = sut.validate(undefined);
    
    // Assert
    expect(result.error).toEqual('Field is required');
  })
  
  it('[UNIT][RQV-006]: Use message', () => {
    // Arrange
    const error = faker.string.alphanumeric();
    const sut = createSut(error);
    
    // Act
    const result = sut.validate(undefined);
    
    // Assert
    expect(result.error).toEqual(error);
  })
})