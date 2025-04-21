import { ICommonSchemaFieldBaseDate } from '@app-parcel-model-schemas-common-fields/interfaces/schemas/fields/base';
import { commonSchemaFieldTypeDate } from '@app-parcel-model-schemas-common-fields/schemas/fields/types';

export const commonSchemaFieldBaseCreatedAt = {
  ...commonSchemaFieldTypeDate,
} as unknown as ICommonSchemaFieldBaseDate;
