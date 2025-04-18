import { commonSchemaFieldTypeObjectId } from '@app/schemas/fields/types';

describe('commonSchemaFieldTypeObjectId', () => {
  describe('positive', () => {
    test('should contain the expected type', () => {
      // Arrange
      const typeExpected = 'ObjectId';

      // Act
      const typeFound = commonSchemaFieldTypeObjectId.type;

      // Assert
      expect(typeFound).toEqual(typeExpected);
    });
  });
});
