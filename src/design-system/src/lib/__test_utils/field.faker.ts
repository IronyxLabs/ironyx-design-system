import type { Field } from "$lib/forms/field/field.svelte.ts";
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
}