import { describe, expect, it } from "vitest";
import { render, screen } from '@testing-library/svelte/svelte5';
import IxField from "./ix-field.svelte";
import { faker } from "@faker-js/faker";
import { createRawSnippet } from "svelte";
import { FieldFaker } from "../../__test_utils/field.faker.ts";

describe('IxField', () => {
  it('[UNIT][IFD-001]: Set Label', () => {
    // Arrange
    const label = faker.string.alphanumeric();
    const field = FieldFaker.random();
    
    // Act
    render(IxField, {
      label: label,
      field: field,
      children: createRawSnippet(() => {
        return {
          render: () => "<span></span>"        
        }
      })
    });
    
    // Assert
    expect(screen.getByText(label)).toBeInTheDocument();
  })
})