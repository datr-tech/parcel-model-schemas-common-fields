import * as schemaFieldQualifiers from '@app/schemas/fields/qualifiers';

describe('schemaFieldQualifiers', () => {
  describe('positive', () => {
    test('should contain the expected number of qualifiers', () => {
      // Arrange
      const numQualifiersExpected = 4;

      // Act
      const numQualifiersFound = Object.keys(schemaFieldQualifiers).length;

      // Assert
      expect(numQualifiersFound).toEqual(numQualifiersExpected);
    });
  });
});
