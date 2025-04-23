import {
  commonSchemaFieldGroupFooter,
  commonSchemaFieldGroupModelType,
  commonSchemaFieldGroupUniqueNameAndOptionalDescription,
} from '../../../../';

describe('commonSchemaFieldGroupModelType', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        ...commonSchemaFieldGroupFooter,
        ...commonSchemaFieldGroupUniqueNameAndOptionalDescription,
      };

      // Act
      const propsFound = { ...commonSchemaFieldGroupModelType };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
