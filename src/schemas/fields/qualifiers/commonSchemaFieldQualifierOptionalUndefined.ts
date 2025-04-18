import { ICommonSchemaFieldQualifierDefault } from '@app/interfaces/schemas/fields/qualifiers';
import { commonSchemaFieldQualifierOptional } from './commonSchemaFieldQualifierOptional';

const commonSchemaFieldQualifierDefault: ICommonSchemaFieldQualifierDefault = {
  default: 'undefined',
};

export const commonSchemaFieldQualifierOptionalUndefined = {
  ...commonSchemaFieldQualifierDefault,
  ...commonSchemaFieldQualifierOptional,
};
