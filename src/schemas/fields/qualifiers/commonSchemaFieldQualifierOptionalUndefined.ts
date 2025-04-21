import { ICommonSchemaFieldQualifierDefault } from '@app-parcel-model-schemas-common-fields-parcel-model-schemas-common-fields/interfaces/schemas/fields/qualifiers';
import { commonSchemaFieldQualifierOptional } from './commonSchemaFieldQualifierOptional';

const commonSchemaFieldQualifierDefault: ICommonSchemaFieldQualifierDefault = {
  default: 'undefined',
};

export const commonSchemaFieldQualifierOptionalUndefined = {
  ...commonSchemaFieldQualifierDefault,
  ...commonSchemaFieldQualifierOptional,
};
