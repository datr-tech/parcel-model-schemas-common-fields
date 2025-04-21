import { ICommonSchemaFieldDefName } from '@app-pmscf/interfaces/schemas/fields/defs';
import { commonSchemaFieldBaseName } from '@app-pmscf/schemas/fields/base';
import { commonSchemaFieldQualifierRequired } from '@app-pmscf/schemas/fields/qualifiers';

export const commonSchemaFieldDefNameRequired = {
  trim: true,
  ...commonSchemaFieldQualifierRequired,
  ...commonSchemaFieldBaseName,
} as ICommonSchemaFieldDefName;
