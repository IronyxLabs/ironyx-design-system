import { describe, expect, it } from "vitest";
import { Form } from "./form.svelte.ts";
import { Field } from "../field/field.svelte.ts";
import { FieldFaker } from "../../__test_utils/field.faker.ts";

describe('Form', () => {
  const createSut = (fields: { name: Field<string> }) => new Form(fields);

  it('[UNIT][FRM-001]: Get valid', () => {
    // Arrange
    const field = FieldFaker.random();
    const sut = createSut({ name: field });
    
    // Act
    const result = sut.valid;
    
    // Assert
    expect(result).toBe(field.valid);
  });
  
  it('[UNIT][FRM-001]: Get invalid', () => {
    // Arrange
    const field = FieldFaker.random();
    const sut = createSut({ name: field });
    
    // Act
    const result = sut.invalid;
    
    // Assert
    expect(result).toBe(field.invalid);
  });
})