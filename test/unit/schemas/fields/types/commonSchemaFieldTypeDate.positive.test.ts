import { commonSchemaFieldTypeDate } from '@app-pmscf/schemas/fields/types';

describe('commonSchemaFieldTypeDate', () => {
  describe('positive', () => {
    test('should contain the expected type', () => {
      // Arrange
      const typeExpected = 'Date';

      // Act
      const typeFound = commonSchemaFieldTypeDate.type;

      // Assert
      expect(typeFound).toEqual(typeExpected);
    });
  });
});
