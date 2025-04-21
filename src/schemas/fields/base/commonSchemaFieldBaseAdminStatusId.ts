import { ICommonSchemaFieldBaseRef } from '@app-pmscf/interfaces/schemas/fields/base';
import { commonSchemaFieldTypeObjectId } from '@app-pmscf/schemas/fields/types';

export const commonSchemaFieldBaseAdminStatusId = {
  ...commonSchemaFieldTypeObjectId,
  ref: 'admin/StatusModel',
} as ICommonSchemaFieldBaseRef;
