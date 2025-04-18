import { ICommonSchemaFieldDefUpdatedAt } from '@app/interfaces/schemas/fields/defs';
import { commonSchemaFieldBaseUpdatedAt } from '../base/commonSchemaFieldBaseUpdatedAt';
import { commonSchemaFieldQualifierOptional } from '../qualifiers/commonSchemaFieldQualifierOptional';

export const commonSchemaFieldDefUpdatedAtOptional = {
  ...commonSchemaFieldQualifierOptional,
  ...commonSchemaFieldBaseUpdatedAt,
} as ICommonSchemaFieldDefUpdatedAt;
