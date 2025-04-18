import { commonSchemaFieldBaseName } from '../../../../../dist';

describe('commonSchemaFieldBaseName', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      // Arrange
      const propRefExpected = undefined;
      const propTypeExpected = 'String';

      // Act
      const propRefFound =
        typeof commonSchemaFieldBaseName['ref'] !== 'undefined'
          ? commonSchemaFieldBaseName['ref']
          : undefined;

      const propTypeFound = commonSchemaFieldBaseName.type;

      // Assert
      expect(propRefFound).toEqual(propRefExpected);
      expect(propTypeFound).toEqual(propTypeExpected);
    });
  });
});
