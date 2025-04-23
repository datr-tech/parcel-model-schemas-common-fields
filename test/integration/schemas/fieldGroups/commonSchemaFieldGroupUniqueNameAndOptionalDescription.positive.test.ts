import {
  commonSchemaFieldDefDescriptionOptional,
  commonSchemaFieldDefNameRequiredUnique,
} from '@app-pmscf/schemas/fields/defs';
import { commonSchemaFieldGroupUniqueNameAndOptionalDescription } from '../../../../';

describe('commonSchemaFieldGroupUniqueNameAndOptionalDescription', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        name: commonSchemaFieldDefNameRequiredUnique,
        description: commonSchemaFieldDefDescriptionOptional,
      };

      // Act
      const propsFound = { ...commonSchemaFieldGroupUniqueNameAndOptionalDescription };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
