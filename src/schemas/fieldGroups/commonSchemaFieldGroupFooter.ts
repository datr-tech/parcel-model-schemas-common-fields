import {
  commonSchemaFieldDefAdminStatusIdOptionalUndefined,
  commonSchemaFieldDefAdminUserIdRequired,
  commonSchemaFieldDefCreatedAtOptional,
  commonSchemaFieldDefUpdatedAtOptional,
} from '@app-pmscf/schemas/fields/defs';

export const commonSchemaFieldGroupFooter = {
  adminStatusId: commonSchemaFieldDefAdminStatusIdOptionalUndefined,
  adminUserId: commonSchemaFieldDefAdminUserIdRequired,
  createdAt: commonSchemaFieldDefCreatedAtOptional,
  updatedAt: commonSchemaFieldDefUpdatedAtOptional,
};
