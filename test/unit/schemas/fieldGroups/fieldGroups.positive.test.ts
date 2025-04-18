import * as fieldGroups from '@app/schemas/fieldGroups';

describe('fieldGroups', () => {
  describe('positive', () => {
    test('should contain the expected number of fieldGroups', () => {
      // Arrange
      const numFieldGroupsExpected = 3;

      // Act
      const numFieldGroupsFound = Object.keys(fieldGroups).length;

      // Assert
      expect(numFieldGroupsFound).toEqual(numFieldGroupsExpected);
    });
  });
});
