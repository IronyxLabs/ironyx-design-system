import type { Field } from "../forms/field/field.svelte.ts";
import { ValidationStateHelper } from "../forms/validation_state/validation_state.ts";
import { faker } from "@faker-js/faker";
import { vi } from "vitest";

export class FieldFaker {
  private static generate(): unknown {
    return {
      value: faker.string.alphanumeric(),
      
      validators: [],
      validationState: { isValid: faker.datatype.boolean(), error: faker.lorem.sentence() },
      validate: vi.fn()
      
    }
  }
  
  public static random() : Field<string> {
    return FieldFaker.generate() as Field<string>
  }

  public static valid(): Field<string> {
    const result = FieldFaker.generate();
    result.validationState = ValidationStateHelper.valid();
      
    return result as Field<string>;
  }
  
  public static invalid(error: string): Field<string> {
    const result = FieldFaker.generate();
    result.validationState = ValidationStateHelper.invalid(error);
      
    return result as Field<string>;
  }
}