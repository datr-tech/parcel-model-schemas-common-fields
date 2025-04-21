import { commonSchemaFieldDefObjectIdRequired } from '@dist-pmscf';

describe('commonSchemaFieldDefObjectIdRequired', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      // Arrange
      const propsExpected = {
        required: true,
        type: 'ObjectId',
      };

      // Act
      const propsFound = { ...commonSchemaFieldDefObjectIdRequired };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
