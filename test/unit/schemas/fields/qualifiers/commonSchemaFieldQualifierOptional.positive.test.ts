import { commonSchemaFieldQualifierOptional } from '@app-pmscf/schemas/fields/qualifiers';

describe('commonSchemaFieldQualifierOptional', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      // Arrange
      const propRequiredExpected = false;

      // Act
      const propRequiredFound =
        typeof commonSchemaFieldQualifierOptional['required'] !== 'undefined'
          ? commonSchemaFieldQualifierOptional['required']
          : undefined;

      // Assert
      expect(propRequiredFound).toEqual(propRequiredExpected);
    });
  });
});
