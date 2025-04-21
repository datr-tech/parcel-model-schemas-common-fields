import { commonSchemaFieldBaseUrl } from '@app-pmscf/schemas/fields/base';

describe('commonSchemaFieldBaseUrl', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      // Arrange
      const propRefExpected = undefined;
      const propTypeExpected = 'String';

      // Act
      const propRefFound =
        typeof commonSchemaFieldBaseUrl['ref'] !== 'undefined'
          ? commonSchemaFieldBaseUrl['ref']
          : undefined;

      const propTypeFound = commonSchemaFieldBaseUrl.type;

      // Assert
      expect(propRefFound).toEqual(propRefExpected);
      expect(propTypeFound).toEqual(propTypeExpected);
    });
  });
});
