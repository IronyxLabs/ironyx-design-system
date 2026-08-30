import { describe, expect, it } from "vitest";
import { Form } from "./form.ts";
import { Field } from "../field/field.svelte.ts";
import { FieldFaker } from "$lib/__test_utils/field.faker.ts";

describe('Form', () => {
  const createSut = (fields: { name: Field<string> }) => new Form(fields);

  it('[UNIT][FRM-001]: Get isValid', () => {
    // Arrange
    const field = FieldFaker.random();
    const sut = createSut({ name: field });
    
    // Act
    const result = sut.isValid;
    
    // Assert
    expect(result).toBe(field.validationState.isValid);
  });
})