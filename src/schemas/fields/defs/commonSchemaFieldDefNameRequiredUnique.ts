import { ICommonSchemaFieldDefNameUnique } from '@app-pmscf/interfaces/schemas/fields/defs';
import { commonSchemaFieldQualifierUnique } from '@app-pmscf/schemas/fields/qualifiers';
import { commonSchemaFieldDefNameRequired } from './commonSchemaFieldDefNameRequired';

export const commonSchemaFieldDefNameRequiredUnique = {
  ...commonSchemaFieldQualifierUnique,
  ...commonSchemaFieldDefNameRequired,
} as ICommonSchemaFieldDefNameUnique;
