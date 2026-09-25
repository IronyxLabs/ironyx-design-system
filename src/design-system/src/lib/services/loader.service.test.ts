import { describe, expect, it } from "vitest";
import { LoaderService } from "./loader.service.ts";
import { faker } from "@faker-js/faker";
import { loaderStore } from "./loader.store.ts";

describe('LSV - Loader Service', () => {
  const createSUT = () => new LoaderService();

  it('[UNIT][LSV-001]: Show Loader', () => {
    // Arrange
    const key = faker.string.alpha(); 
    const sut = createSUT();
    
    // Act
    sut.show(key);
    
    // Assert
    expect(loaderStore.provide(key).isActive).toBeTruthy();
  })
  
  it('[UNIT][LSV-002]: Hide Loader', () => {
    // Arrange
    const key = faker.string.alpha(); 
    const sut = createSUT();

    sut.show(key);
    
    // Act
    sut.hide(key);
    
    // Assert
    expect(loaderStore.provide(key).isActive).toBeFalsy();
  })
  
  it('[UNIT][LSV-003]: Load', async () => {
    // Arrange
    const key = faker.string.alpha();
    const sut = createSUT();
    
    // Act
    await sut.loadAsync(async () => {
      expect(loaderStore.provide(key).isActive).toBeTruthy();
    }, key);
    
    // Assert
    expect(loaderStore.provide(key).isActive).toBeFalsy();
    expect.assertions(2);
  })
})