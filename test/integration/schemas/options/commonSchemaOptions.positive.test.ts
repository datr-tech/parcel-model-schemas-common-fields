import { commonSchemaOptions } from '../../../../dist';

describe('commonSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        timestamps: true,
        validateModifiedOnly: true,
      };

      // Act
      const propsFound = { ...commonSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
