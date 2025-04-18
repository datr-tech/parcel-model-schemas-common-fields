import { ICommonSchemaFieldDefAdminUserId } from '@app/interfaces/schemas/fields/defs';
import { commonSchemaFieldBaseAdminUserId } from '@app/schemas/fields/base';
import { commonSchemaFieldQualifierRequired } from '@app/schemas/fields/qualifiers';

export const commonSchemaFieldDefAdminUserIdRequired = {
  ...commonSchemaFieldQualifierRequired,
  ...commonSchemaFieldBaseAdminUserId,
} as ICommonSchemaFieldDefAdminUserId;
