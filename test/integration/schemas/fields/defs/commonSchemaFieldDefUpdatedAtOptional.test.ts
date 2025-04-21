import { commonSchemaFieldDefUpdatedAtOptional } from '@dist-pmscf';

describe('commonSchemaFieldDefUpdatedAtOptional', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      // Arrange
      const propsExpected = {
        required: false,
        type: 'Date',
      };

      // Act
      const propsFound = { ...commonSchemaFieldDefUpdatedAtOptional };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
