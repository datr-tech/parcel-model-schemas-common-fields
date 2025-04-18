import { commonSchemaFieldBaseUrl } from '../base/commonSchemaFieldBaseUrl';
import { commonSchemaFieldQualifierRequired } from '../qualifiers/commonSchemaFieldQualifierRequired';

export const commonSchemaFieldDefUrlRequired = {
  ...commonSchemaFieldQualifierRequired,
  ...commonSchemaFieldBaseUrl,
};
