import { ICommonSchemaFieldDefUpdatedAt } from '@app-parcel-model-schemas-common-fields-parcel-model-schemas-common-fields/interfaces/schemas/fields/defs';
import { commonSchemaFieldBaseUpdatedAt } from '../base/commonSchemaFieldBaseUpdatedAt';
import { commonSchemaFieldQualifierOptional } from '../qualifiers/commonSchemaFieldQualifierOptional';

export const commonSchemaFieldDefUpdatedAtOptional = {
  ...commonSchemaFieldQualifierOptional,
  ...commonSchemaFieldBaseUpdatedAt,
} as ICommonSchemaFieldDefUpdatedAt;
