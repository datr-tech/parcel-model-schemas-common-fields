import * as schemaFieldDefs from '@app-pmscf/schemas/fields/defs';

describe('defs', () => {
  describe('positive', () => {
    test('should contain the expected number of defs', () => {
      // Arrange
      const numFieldDefsExpected = 9;

      // Act
      const numFieldDefsFound = Object.keys(schemaFieldDefs).length;

      // Assert
      expect(numFieldDefsFound).toEqual(numFieldDefsExpected);
    });
  });
});
