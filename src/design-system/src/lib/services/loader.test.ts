import { describe, expect, it } from "vitest";
import { Loader } from "./loader.svelte.ts";

describe('LDR - Loader', () => {
  const createSUT = () => new Loader();
  
  it('[UNIT][LDR-001]: Activate', () => {
    // Arrange
    const sut = createSUT();
    
    // Act
    sut.activate();
     
    // Assert
    expect(sut.isActive).toBeTruthy();
  })
  
  it('[UNIT][LDR-002]: Deactivate', () => {
    // Arrange
    const sut = createSUT();
    
    sut.activate();
    
    // Act
    sut.deactivate();
     
    // Assert
    expect(sut.isActive).toBeFalsy();
  })
  
  it('[UNIT][LDR-003]: Activate Multiple Times', () => {
    // Arrange
    const sut = createSUT();
    
    sut.activate();
    sut.activate();
    
    // Act
    sut.deactivate();
     
    // Assert
    expect(sut.isActive).toBeTruthy();
  })
})