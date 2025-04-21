import { commonSchemaFieldBaseCreatedAt } from '@app-pmscf/schemas/fields/base';

describe('commonSchemaFieldBaseCreatedAt', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      // Arrange
      const propRefExpected = undefined;
      const propTypeExpected = 'Date';

      // Act
      const propRefFound =
        typeof commonSchemaFieldBaseCreatedAt['ref'] !== 'undefined'
          ? commonSchemaFieldBaseCreatedAt['ref']
          : undefined;

      const propTypeFound = commonSchemaFieldBaseCreatedAt.type;

      // Assert
      expect(propRefFound).toEqual(propRefExpected);
      expect(propTypeFound).toEqual(propTypeExpected);
    });
  });
});
