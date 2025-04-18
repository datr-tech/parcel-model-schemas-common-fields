import { commonSchemaFieldQualifierUnique } from '../../../../../dist';

describe('commonSchemaFieldQualifierUnique', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      // Arrange
      const propUniqueExpected = true;

      // Act
      const propUniqueFound =
        typeof commonSchemaFieldQualifierUnique['unique'] !== 'undefined'
          ? commonSchemaFieldQualifierUnique['unique']
          : undefined;

      // Assert
      expect(propUniqueFound).toEqual(propUniqueExpected);
    });
  });
});
