import { commonSchemaFieldDefCreatedAtOptional } from '../../../../../dist';

describe('commonSchemaFieldDefCreatedAtOptional', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      // Arrange
      const propsExpected = {
        required: false,
        type: 'Date',
      };

      // Act
      const propsFound = { ...commonSchemaFieldDefCreatedAtOptional };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
