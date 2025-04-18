import { commonSchemaFieldDefNameRequired } from '@app/schemas/fields/defs';

describe('commonSchemaFieldDefNameRequired', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      // Arrange
      const propsExpected = {
        maxLength: 100,
        required: true,
        trim: true,
        type: 'String',
      };

      // Act
      const propsFound = { ...commonSchemaFieldDefNameRequired };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
