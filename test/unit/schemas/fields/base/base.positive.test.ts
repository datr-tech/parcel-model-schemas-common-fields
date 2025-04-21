import * as schemaBaseFields from '@app-pmscf/schemas/fields/base';

describe('baseFields', () => {
  describe('positive', () => {
    test('should contain the expected number of baseFields', () => {
      // Arrange
      const numBaseFieldsExpected = 7;

      // Act
      const numBaseFieldsFound = Object.keys(schemaBaseFields).length;

      // Assert
      expect(numBaseFieldsFound).toEqual(numBaseFieldsExpected);
    });
  });
});
