import { ICommonSchemaFieldBaseString } from '@app-pmscf/interfaces/schemas/fields/base';
import { commonSchemaFieldTypeString } from '@app-pmscf/schemas/fields/types';

export const commonSchemaFieldBaseName = {
  ...commonSchemaFieldTypeString,
  maxLength: 100,
} as ICommonSchemaFieldBaseString;
