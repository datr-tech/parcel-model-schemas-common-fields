import { ICommonSchemaFieldDefUpdatedAt } from '@app-pmscf/interfaces/schemas/fields/defs';
import { commonSchemaFieldBaseUpdatedAt } from '@app-pmscf/schemas/fields/base';
import { commonSchemaFieldQualifierOptional } from '@app-pmscf/schemas/fields/qualifiers';

export const commonSchemaFieldDefUpdatedAtOptional = {
  ...commonSchemaFieldQualifierOptional,
  ...commonSchemaFieldBaseUpdatedAt,
} as ICommonSchemaFieldDefUpdatedAt;
