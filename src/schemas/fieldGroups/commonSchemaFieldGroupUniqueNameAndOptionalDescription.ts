import {
  commonSchemaFieldDefDescriptionOptional,
  commonSchemaFieldDefNameRequiredUnique,
} from '@app-pmscf/schemas/fields/defs';

export const commonSchemaFieldGroupUniqueNameAndOptionalDescription = {
  description: commonSchemaFieldDefDescriptionOptional,
  name: commonSchemaFieldDefNameRequiredUnique,
};
