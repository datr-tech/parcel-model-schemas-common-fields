import { commonSchemaFieldTypeString } from '@app/schemas/fields/types';

describe('commonSchemaFieldTypeString', () => {
  describe('positive', () => {
    test('should contain the expected type', () => {
      // Arrange
      const typeExpected = 'String';

      // Act
      const typeFound = commonSchemaFieldTypeString.type;

      // Assert
      expect(typeFound).toEqual(typeExpected);
    });
  });
});
