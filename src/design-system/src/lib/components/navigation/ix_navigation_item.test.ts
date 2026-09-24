import type { isActionFailure } from "@sveltejs/kit";
import { render } from "@testing-library/svelte";
import { describe, expect, it } from "vitest";
import IxNavigation from "./ix_navigation.svelte";
import { faker } from "@faker-js/faker";

describe('NAV - IxNavigation', () => {
  const createSUT = (label: string, icon: string) => render(IxNavigation, {
    label: label,
    icon: icon
  })
  
  it('[UNIT][NAV-001]: Show label', () => {
    // Arrange
    const label = faker.string.alphanumeric();
    
    // Act
    const sut = createSUT(label, '');
     
    // Assert
    expect(sut.getByText(label)).toBeInTheDocument();
  })
  
  it('[UNIT][NAV-002]: Show icon', () => {
    // Arrange
    const icon = faker.string.alphanumeric();
    
    // Act
    const sut = createSUT('', icon);
     
    // Assert
    expect(sut.container.querySelector('i')).toHaveClass(icon);
  })
})