import { ICommonSchemaFieldDefAdminUserId } from '@app-pmscf/interfaces/schemas/fields/defs';
import { commonSchemaFieldBaseAdminUserId } from '@app-pmscf/schemas/fields/base';
import { commonSchemaFieldQualifierRequired } from '@app-pmscf/schemas/fields/qualifiers';

export const commonSchemaFieldDefAdminUserIdRequired = {
  ...commonSchemaFieldQualifierRequired,
  ...commonSchemaFieldBaseAdminUserId,
} as ICommonSchemaFieldDefAdminUserId;
