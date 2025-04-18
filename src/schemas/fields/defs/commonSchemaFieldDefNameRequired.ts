import { ICommonSchemaFieldDefName } from '@app/interfaces/schemas/fields/defs';
import { commonSchemaFieldBaseName } from '../base/commonSchemaFieldBaseName';
import { commonSchemaFieldQualifierRequired } from '../qualifiers/commonSchemaFieldQualifierRequired';

export const commonSchemaFieldDefNameRequired = {
  trim: true,
  ...commonSchemaFieldQualifierRequired,
  ...commonSchemaFieldBaseName,
} as ICommonSchemaFieldDefName;
