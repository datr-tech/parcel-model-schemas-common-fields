import { ICommonSchemaFieldDefAdminStatusId } from '@app-parcel-model-schemas-common-fields-parcel-model-schemas-common-fields/interfaces/schemas/fields/defs';
import { commonSchemaFieldBaseAdminStatusId } from '@app-parcel-model-schemas-common-fields-parcel-model-schemas-common-fields/schemas/fields/base';
import { commonSchemaFieldQualifierOptionalUndefined } from '@app-parcel-model-schemas-common-fields-parcel-model-schemas-common-fields/schemas/fields/qualifiers';

export const commonSchemaFieldDefAdminStatusIdOptionalUndefined = {
  ...commonSchemaFieldQualifierOptionalUndefined,
  ...commonSchemaFieldBaseAdminStatusId,
} as ICommonSchemaFieldDefAdminStatusId;
