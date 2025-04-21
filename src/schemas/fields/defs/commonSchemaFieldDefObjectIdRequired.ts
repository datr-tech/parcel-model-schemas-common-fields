import { commonSchemaFieldQualifierRequired } from '@app-pmscf/schemas/fields/qualifiers';
import { commonSchemaFieldTypeObjectId } from '@app-pmscf/schemas/fields/types';

export const commonSchemaFieldDefObjectIdRequired = {
  ...commonSchemaFieldQualifierRequired,
  ...commonSchemaFieldTypeObjectId,
};
