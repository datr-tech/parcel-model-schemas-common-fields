import { commonSchemaFieldBaseDescription } from '@app-pmscf/schemas/fields/base';
import { commonSchemaFieldQualifierOptional } from '@app-pmscf/schemas/fields/qualifiers';

export const commonSchemaFieldDefDescriptionOptional = {
  ...commonSchemaFieldQualifierOptional,
  ...commonSchemaFieldBaseDescription,
};
