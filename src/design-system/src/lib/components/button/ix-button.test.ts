import { render } from "@testing-library/svelte";
import { describe } from "node:test";
import IxButton from "./ix-button.svelte";
import { ButtonVariant } from "./button_variants.js";
import { createRawSnippet } from "svelte";
import { expect, it } from "vitest";
import { faker } from "@faker-js/faker";

describe('BTN - IxButton', () => {
  const createSut = (variant: ButtonVariant = ButtonVariant.Primary, disabled: boolean = false, icon?: string) => render(IxButton, {
    variant: variant,
    disabled: disabled,
    icon: icon,
    children: createRawSnippet(() => ({
      render: () => "Test Button"
    }))
  });
  
  it('[UNIT][BTN-001]: Primary button', () => {
    // Act
    const sut = createSut(ButtonVariant.Primary);
    
    // Assert
    expect(getByClass(sut.container, '.button--primary')).toBeInTheDocument();
  })
  
  it('[UNIT][BTN-002]: Secondary button', () => {
    // Act
    const sut = createSut(ButtonVariant.Secondary);
    
    // Assert
    expect(getByClass(sut.container, '.button--secondary')).toBeInTheDocument();
  })
  
  it('[UNIT][BTN-003]: Desctructive button', () => {
    // Act
    const sut = createSut(ButtonVariant.Destructive);
    
    // Assert
    expect(getByClass(sut.container, '.button--destructive')).toBeInTheDocument();
  })
  
  it('[UNIT][BTN-004]: Disable', () => {
    // Act
    const sut = createSut(ButtonVariant.Primary, true);
    
    // Assert
    expect(getByClass(sut.container, '.button')).toBeDisabled();
  })
  
  it('[UNIT][BTN-005]: Show icon', () => {
    // Arrange
    const icon = faker.string.alpha();
    
    // Act
    const sut = createSut(ButtonVariant.Primary, true, icon);
    
    // Assert
    expect(getIcon(sut.container, `.${icon}`)).toBeInTheDocument();
  })
})

const getByClass = (container: HTMLElement, cssClass: string) => {
  return container.querySelector(cssClass);
}

const getIcon = (container: HTMLElement, icon: string) => {
  return container.querySelector(`i${icon}`);
}