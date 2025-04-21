import { ICommonSchemaFieldBaseString } from '@app-pmscf/interfaces/schemas/fields/base';
import { commonSchemaFieldTypeString } from '@app-pmscf/schemas/fields/types';

export const commonSchemaFieldBaseUrl = {
  ...commonSchemaFieldTypeString,
  maxLength: 100,
} as ICommonSchemaFieldBaseString;
