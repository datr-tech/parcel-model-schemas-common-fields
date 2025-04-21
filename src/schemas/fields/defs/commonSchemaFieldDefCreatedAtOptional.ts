import { ICommonSchemaFieldDefCreatedAt } from '@app-pmscf/interfaces/schemas/fields/defs';
import { commonSchemaFieldBaseCreatedAt } from '@app-pmscf/schemas/fields/base';
import { commonSchemaFieldQualifierOptional } from '@app-pmscf/schemas/fields/qualifiers';

export const commonSchemaFieldDefCreatedAtOptional = {
  ...commonSchemaFieldQualifierOptional,
  ...commonSchemaFieldBaseCreatedAt,
} as ICommonSchemaFieldDefCreatedAt;
