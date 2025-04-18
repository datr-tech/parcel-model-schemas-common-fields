import { ICommonSchemaFieldDefCreatedAt } from '@app/interfaces/schemas/fields/defs';
import { commonSchemaFieldBaseCreatedAt } from '../base/commonSchemaFieldBaseCreatedAt';
import { commonSchemaFieldQualifierOptional } from '../qualifiers/commonSchemaFieldQualifierOptional';

export const commonSchemaFieldDefCreatedAtOptional = {
  ...commonSchemaFieldQualifierOptional,
  ...commonSchemaFieldBaseCreatedAt,
} as ICommonSchemaFieldDefCreatedAt;
