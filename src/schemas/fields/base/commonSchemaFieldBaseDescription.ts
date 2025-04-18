import { ICommonSchemaFieldBaseString } from '@app/interfaces/schemas/fields/base';
import { commonSchemaFieldTypeString } from '@app/schemas/fields/types';

export const commonSchemaFieldBaseDescription = {
  ...commonSchemaFieldTypeString,
  maxLength: 200,
} as ICommonSchemaFieldBaseString;
