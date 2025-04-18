import {
  commonSchemaFieldDefAdminStatusIdOptionalUndefined,
  commonSchemaFieldDefAdminUserIdRequired,
  commonSchemaFieldDefCreatedAtOptional,
  commonSchemaFieldDefUpdatedAtOptional,
} from '../fields/defs';

export const commonSchemaFieldGroupFooter = {
  adminStatusId: commonSchemaFieldDefAdminStatusIdOptionalUndefined,
  adminUserId: commonSchemaFieldDefAdminUserIdRequired,
  createdAt: commonSchemaFieldDefCreatedAtOptional,
  updatedAt: commonSchemaFieldDefUpdatedAtOptional,
};
