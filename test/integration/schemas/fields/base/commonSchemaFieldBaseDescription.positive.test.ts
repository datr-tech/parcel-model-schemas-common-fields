import { commonSchemaFieldBaseDescription } from '../../../../../';

describe('commonSchemaFieldBaseDescription', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      // Arrange
      const propRefExpected = undefined;
      const propTypeExpected = 'String';

      // Act
      const propRefFound =
        typeof commonSchemaFieldBaseDescription['ref'] !== 'undefined'
          ? commonSchemaFieldBaseDescription['ref']
          : undefined;

      const propTypeFound = commonSchemaFieldBaseDescription.type;

      // Assert
      expect(propRefFound).toEqual(propRefExpected);
      expect(propTypeFound).toEqual(propTypeExpected);
    });
  });
});
