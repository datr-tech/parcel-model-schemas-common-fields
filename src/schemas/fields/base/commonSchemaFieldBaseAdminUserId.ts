import { ICommonSchemaFieldBaseRef } from '@app-pmscf/interfaces/schemas/fields/base';
import { commonSchemaFieldTypeObjectId } from '@app-pmscf/schemas/fields/types';

export const commonSchemaFieldBaseAdminUserId = {
  ...commonSchemaFieldTypeObjectId,
  ref: 'persona/UserModel',
} as ICommonSchemaFieldBaseRef;
