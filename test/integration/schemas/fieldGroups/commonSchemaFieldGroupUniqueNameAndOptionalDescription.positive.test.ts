import {
  commonSchemaFieldDefDescriptionOptional,
  commonSchemaFieldDefNameRequiredUnique,
} from '@app/schemas/fields/defs';
import { commonSchemaFieldGroupUniqueNameAndOptionalDescription } from '../../../../dist';

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
