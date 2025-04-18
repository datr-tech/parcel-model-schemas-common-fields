import { commonSchemaFieldDefNameRequiredUnique } from '@app/schemas/fields/defs';

describe('commonSchemaFieldDefNameRequiredUnique', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      // Arrange
      const propsExpected = {
        maxLength: 100,
        required: true,
        trim: true,
        type: 'String',
        unique: true,
      };

      // Act
      const propsFound = { ...commonSchemaFieldDefNameRequiredUnique };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
