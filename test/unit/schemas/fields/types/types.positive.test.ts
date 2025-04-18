import * as schemaFieldTypes from '@app/schemas/fields/types';

describe('types', () => {
  describe('positive', () => {
    test('should contain the expected number of types', () => {
      // Arrange
      const numTypesExpected = 3;

      // Act
      const numTypesFound = Object.keys(schemaFieldTypes).length;

      // Assert
      expect(numTypesFound).toEqual(numTypesExpected);
    });
  });
});
