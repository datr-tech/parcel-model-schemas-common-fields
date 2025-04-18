import { ICommonSchemaFieldBaseRef } from '@app/interfaces/schemas/fields/base';
import { commonSchemaFieldTypeObjectId } from '@app/schemas/fields/types';

export const commonSchemaFieldBaseAdminUserId = {
  ...commonSchemaFieldTypeObjectId,
  ref: 'persona/UserModel',
} as ICommonSchemaFieldBaseRef;
