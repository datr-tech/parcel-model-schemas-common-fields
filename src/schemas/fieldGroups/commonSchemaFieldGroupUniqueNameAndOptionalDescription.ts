import {
  commonSchemaFieldDefDescriptionOptional,
  commonSchemaFieldDefNameRequiredUnique,
} from '../fields/defs';

export const commonSchemaFieldGroupUniqueNameAndOptionalDescription = {
  description: commonSchemaFieldDefDescriptionOptional,
  name: commonSchemaFieldDefNameRequiredUnique,
};
