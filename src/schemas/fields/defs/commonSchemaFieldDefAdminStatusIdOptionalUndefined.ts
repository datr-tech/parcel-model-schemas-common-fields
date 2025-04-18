import { ICommonSchemaFieldDefAdminStatusId } from '@app/interfaces/schemas/fields/defs';
import { commonSchemaFieldBaseAdminStatusId } from '@app/schemas/fields/base';
import { commonSchemaFieldQualifierOptionalUndefined } from '@app/schemas/fields/qualifiers';

export const commonSchemaFieldDefAdminStatusIdOptionalUndefined = {
  ...commonSchemaFieldQualifierOptionalUndefined,
  ...commonSchemaFieldBaseAdminStatusId,
} as ICommonSchemaFieldDefAdminStatusId;
