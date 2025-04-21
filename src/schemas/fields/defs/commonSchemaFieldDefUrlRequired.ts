import { commonSchemaFieldBaseUrl } from '@app-pmscf/schemas/fields/base';
import { commonSchemaFieldQualifierRequired } from '@app-pmscf/schemas/fields/qualifiers';

export const commonSchemaFieldDefUrlRequired = {
  ...commonSchemaFieldQualifierRequired,
  ...commonSchemaFieldBaseUrl,
};
