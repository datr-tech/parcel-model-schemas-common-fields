import { commonSchemaFieldBaseUpdatedAt } from '@app/schemas/fields/base';

describe('commonSchemaFieldBaseUpdatedAt', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      // Arrange
      const propRefExpected = undefined;
      const propTypeExpected = 'Date';

      // Act
      const propRefFound =
        typeof commonSchemaFieldBaseUpdatedAt['ref'] !== 'undefined'
          ? commonSchemaFieldBaseUpdatedAt['ref']
          : undefined;

      const propTypeFound = commonSchemaFieldBaseUpdatedAt.type;

      // Assert
      expect(propRefFound).toEqual(propRefExpected);
      expect(propTypeFound).toEqual(propTypeExpected);
    });
  });
});
