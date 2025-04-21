import { ICommonSchemaFieldQualifierDefault } from '@app-pmscf/interfaces/schemas/fields/qualifiers';
import { commonSchemaFieldQualifierOptional } from './commonSchemaFieldQualifierOptional';

const commonSchemaFieldQualifierDefault: ICommonSchemaFieldQualifierDefault = {
  default: 'undefined',
};

export const commonSchemaFieldQualifierOptionalUndefined = {
  ...commonSchemaFieldQualifierDefault,
  ...commonSchemaFieldQualifierOptional,
};
