import { ICommonSchemaFieldDefName } from '@app-parcel-model-schemas-common-fields-parcel-model-schemas-common-fields/interfaces/schemas/fields/defs';
import { commonSchemaFieldBaseName } from '../base/commonSchemaFieldBaseName';
import { commonSchemaFieldQualifierRequired } from '../qualifiers/commonSchemaFieldQualifierRequired';

export const commonSchemaFieldDefNameRequired = {
  trim: true,
  ...commonSchemaFieldQualifierRequired,
  ...commonSchemaFieldBaseName,
} as ICommonSchemaFieldDefName;
