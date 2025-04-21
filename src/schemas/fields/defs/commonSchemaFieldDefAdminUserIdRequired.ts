import { ICommonSchemaFieldDefAdminUserId } from '@app-parcel-model-schemas-common-fields-parcel-model-schemas-common-fields/interfaces/schemas/fields/defs';
import { commonSchemaFieldBaseAdminUserId } from '@app-parcel-model-schemas-common-fields-parcel-model-schemas-common-fields/schemas/fields/base';
import { commonSchemaFieldQualifierRequired } from '@app-parcel-model-schemas-common-fields-parcel-model-schemas-common-fields/schemas/fields/qualifiers';

export const commonSchemaFieldDefAdminUserIdRequired = {
  ...commonSchemaFieldQualifierRequired,
  ...commonSchemaFieldBaseAdminUserId,
} as ICommonSchemaFieldDefAdminUserId;
