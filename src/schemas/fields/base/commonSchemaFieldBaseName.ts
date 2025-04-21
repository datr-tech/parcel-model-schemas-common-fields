import { ICommonSchemaFieldBaseString } from '@app-parcel-model-schemas-common-fields/interfaces/schemas/fields/base';
import { commonSchemaFieldTypeString } from '@app-parcel-model-schemas-common-fields/schemas/fields/types';

export const commonSchemaFieldBaseName = {
  ...commonSchemaFieldTypeString,
  maxLength: 100,
} as ICommonSchemaFieldBaseString;
