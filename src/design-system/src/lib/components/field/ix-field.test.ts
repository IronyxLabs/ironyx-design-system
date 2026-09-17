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

  it('[UNIT][IFD-002]: Required field', () => {
    // Act
    render(IxField, {
      label: faker.string.alphanumeric(),
      field: FieldFaker.random(),
      required: true,
      children: createRawSnippet(() => {
        return {
          render: () => "<span></span>"
        }
      })
    });
    
    // Assert
    expect(screen.getByTestId('label')).toHaveClass('label--required')
  })
  
  it('[UNIT][IFD-003]: Show hint', () => {
    // Arrange
    const hint = faker.lorem.slug();
    
    // Act
    render(IxField, {
      label: faker.string.alphanumeric(),
      field: FieldFaker.valid(),
      hint: hint,
      children: createRawSnippet(() => {
        return {
          render: () => "<span></span>"
        }
      })
    });
    
    // Assert
    expect(screen.getByText(hint)).toBeInTheDocument();
  })
  
  it('[UNIT][IFD-004]: Show error', () => {
    // Arrange
    const error = faker.lorem.slug();
    
    // Act
    render(IxField, {
      label: faker.string.alphanumeric(),
      field: FieldFaker.invalid(error),
      children: createRawSnippet(() => {
        return {
          render: () => "<span></span>"
        }
      })
    });
    
    // Assert
    expect(screen.getByText(error)).toBeInTheDocument();
  })
})