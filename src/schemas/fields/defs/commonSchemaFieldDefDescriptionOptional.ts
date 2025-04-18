import { commonSchemaFieldBaseDescription } from '../base/commonSchemaFieldBaseDescription';
import { commonSchemaFieldQualifierOptional } from '../qualifiers/commonSchemaFieldQualifierOptional';

export const commonSchemaFieldDefDescriptionOptional = {
  ...commonSchemaFieldQualifierOptional,
  ...commonSchemaFieldBaseDescription,
};
