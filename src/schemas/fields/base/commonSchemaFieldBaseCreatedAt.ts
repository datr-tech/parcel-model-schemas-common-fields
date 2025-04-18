import { ICommonSchemaFieldBaseDate } from '@app/interfaces/schemas/fields/base';
import { commonSchemaFieldTypeDate } from '@app/schemas/fields/types';

export const commonSchemaFieldBaseCreatedAt = {
  ...commonSchemaFieldTypeDate,
} as unknown as ICommonSchemaFieldBaseDate;
