import {
  commonSchemaFieldGroupFooter,
  commonSchemaFieldGroupModelType,
  commonSchemaFieldGroupUniqueNameAndOptionalDescription,
} from '@app-pmscf/schemas/fieldGroups';

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
