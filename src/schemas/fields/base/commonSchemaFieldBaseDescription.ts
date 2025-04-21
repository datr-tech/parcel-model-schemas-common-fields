import { ICommonSchemaFieldBaseString } from '@app-pmscf/interfaces/schemas/fields/base';
import { commonSchemaFieldTypeString } from '@app-pmscf/schemas/fields/types';

export const commonSchemaFieldBaseDescription = {
  ...commonSchemaFieldTypeString,
  maxLength: 200,
} as ICommonSchemaFieldBaseString;
