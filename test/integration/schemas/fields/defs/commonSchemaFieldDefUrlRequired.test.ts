import { commonSchemaFieldDefUrlRequired } from '../../../../../';

describe('commonSchemaFieldDefUrlRequired', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      // Arrange
      const propsExpected = {
        maxLength: 100,
        required: true,
        type: 'String',
      };

      // Act
      const propsFound = { ...commonSchemaFieldDefUrlRequired };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
