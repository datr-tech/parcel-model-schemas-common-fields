import { commonSchemaFieldQualifierRequired } from '@dist-pmscf';

describe('commonSchemaFieldQualifierRequired', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      // Arrange
      const propRequiredExpected = true;

      // Act
      const propRequiredFound =
        typeof commonSchemaFieldQualifierRequired['required'] !== 'undefined'
          ? commonSchemaFieldQualifierRequired['required']
          : undefined;

      // Assert
      expect(propRequiredFound).toEqual(propRequiredExpected);
    });
  });
});
