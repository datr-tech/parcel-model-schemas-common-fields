import { ICommonSchemaFieldDefCreatedAt } from '@app-parcel-model-schemas-common-fields-parcel-model-schemas-common-fields/interfaces/schemas/fields/defs';
import { commonSchemaFieldBaseCreatedAt } from '../base/commonSchemaFieldBaseCreatedAt';
import { commonSchemaFieldQualifierOptional } from '../qualifiers/commonSchemaFieldQualifierOptional';

export const commonSchemaFieldDefCreatedAtOptional = {
  ...commonSchemaFieldQualifierOptional,
  ...commonSchemaFieldBaseCreatedAt,
} as ICommonSchemaFieldDefCreatedAt;
