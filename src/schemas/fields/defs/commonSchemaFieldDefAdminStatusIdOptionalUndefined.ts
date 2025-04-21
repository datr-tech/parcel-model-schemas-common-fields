import { ICommonSchemaFieldDefAdminStatusId } from '@app-pmscf/interfaces/schemas/fields/defs';
import { commonSchemaFieldBaseAdminStatusId } from '@app-pmscf/schemas/fields/base';
import { commonSchemaFieldQualifierOptionalUndefined } from '@app-pmscf/schemas/fields/qualifiers';

export const commonSchemaFieldDefAdminStatusIdOptionalUndefined = {
  ...commonSchemaFieldQualifierOptionalUndefined,
  ...commonSchemaFieldBaseAdminStatusId,
} as ICommonSchemaFieldDefAdminStatusId;
