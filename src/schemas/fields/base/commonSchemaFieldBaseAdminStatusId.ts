import { ICommonSchemaFieldBaseRef } from '@app/interfaces/schemas/fields/base';
import { commonSchemaFieldTypeObjectId } from '@app/schemas/fields/types';

export const commonSchemaFieldBaseAdminStatusId = {
  ...commonSchemaFieldTypeObjectId,
  ref: 'admin/StatusModel',
} as ICommonSchemaFieldBaseRef;
