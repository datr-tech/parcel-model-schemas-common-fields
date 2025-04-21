import { ICommonSchemaFieldBaseDate } from '@app-pmscf/interfaces/schemas/fields/base';
import { commonSchemaFieldTypeDate } from '@app-pmscf/schemas/fields/types';

export const commonSchemaFieldBaseCreatedAt = {
  ...commonSchemaFieldTypeDate,
} as unknown as ICommonSchemaFieldBaseDate;
