import { commonSchemaFieldGroupFooter } from '@app/schemas/fieldGroups';
import {
  commonSchemaFieldDefAdminStatusIdOptionalUndefined,
  commonSchemaFieldDefAdminUserIdRequired,
  commonSchemaFieldDefCreatedAtOptional,
  commonSchemaFieldDefUpdatedAtOptional,
} from '@app/schemas/fields/defs';

describe('commonSchemaFieldGroupFooter', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        adminStatusId: commonSchemaFieldDefAdminStatusIdOptionalUndefined,
        adminUserId: commonSchemaFieldDefAdminUserIdRequired,
        createdAt: commonSchemaFieldDefCreatedAtOptional,
        updatedAt: commonSchemaFieldDefUpdatedAtOptional,
      };

      // Act
      const propsFound = { ...commonSchemaFieldGroupFooter };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
