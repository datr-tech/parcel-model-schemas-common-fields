import { commonSchemaFieldDefDescriptionOptional } from '../../../../../';

describe('commonSchemaFieldDefDescriptionOptional', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      // Arrange
      const propsExpected = {
        maxLength: 200,
        required: false,
        type: 'String',
      };

      // Act
      const propsFound = { ...commonSchemaFieldDefDescriptionOptional };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
