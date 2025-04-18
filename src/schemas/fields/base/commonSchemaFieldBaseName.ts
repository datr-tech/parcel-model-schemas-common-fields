import { ICommonSchemaFieldBaseString } from '@app/interfaces/schemas/fields/base';
import { commonSchemaFieldTypeString } from '@app/schemas/fields/types';

export const commonSchemaFieldBaseName = {
  ...commonSchemaFieldTypeString,
  maxLength: 100,
} as ICommonSchemaFieldBaseString;
