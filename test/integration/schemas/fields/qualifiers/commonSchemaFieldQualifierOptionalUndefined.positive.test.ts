import { commonSchemaFieldQualifierOptionalUndefined } from '@dist-pmscf';

describe('commonSchemaFieldQualifierOptionalUndefined', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      // Arrange
      const propDefaultExpected = 'undefined';
      const propRequiredExpected = false;

      // Act
      const propDefaultFound =
        typeof commonSchemaFieldQualifierOptionalUndefined['default'] !== 'undefined'
          ? commonSchemaFieldQualifierOptionalUndefined['default']
          : undefined;

      const propRequiredFound =
        typeof commonSchemaFieldQualifierOptionalUndefined['required'] !== 'undefined'
          ? commonSchemaFieldQualifierOptionalUndefined['required']
          : undefined;

      // Assert
      expect(propDefaultFound).toEqual(propDefaultExpected);
      expect(propRequiredFound).toEqual(propRequiredExpected);
    });
  });
});
