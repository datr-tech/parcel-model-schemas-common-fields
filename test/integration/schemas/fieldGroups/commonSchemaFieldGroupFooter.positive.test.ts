import {
  commonSchemaFieldDefAdminStatusIdOptionalUndefined,
  commonSchemaFieldDefAdminUserIdRequired,
  commonSchemaFieldDefCreatedAtOptional,
  commonSchemaFieldDefUpdatedAtOptional,
} from '@app/schemas/fields/defs';
import { commonSchemaFieldGroupFooter } from '../../../../dist';

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
