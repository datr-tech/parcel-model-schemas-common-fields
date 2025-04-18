import { commonSchemaFieldQualifierRequired } from '../qualifiers/commonSchemaFieldQualifierRequired';
import { commonSchemaFieldTypeObjectId } from '../types/commonSchemaFieldTypeObjectId';

export const commonSchemaFieldDefObjectIdRequired = {
  ...commonSchemaFieldQualifierRequired,
  ...commonSchemaFieldTypeObjectId,
};
