import { ICommonSchemaFieldBaseRef } from '@app-parcel-model-schemas-common-fields-parcel-model-schemas-common-fields/interfaces/schemas/fields/base';
import { commonSchemaFieldTypeObjectId } from '@app-parcel-model-schemas-common-fields-parcel-model-schemas-common-fields/schemas/fields/types';

export const commonSchemaFieldBaseAdminUserId = {
  ...commonSchemaFieldTypeObjectId,
  ref: 'persona/UserModel',
} as ICommonSchemaFieldBaseRef;
