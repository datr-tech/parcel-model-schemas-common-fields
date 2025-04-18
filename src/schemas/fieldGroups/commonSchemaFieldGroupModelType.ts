import { commonSchemaFieldGroupFooter } from './commonSchemaFieldGroupFooter';
import { commonSchemaFieldGroupUniqueNameAndOptionalDescription } from './commonSchemaFieldGroupUniqueNameAndOptionalDescription';

export const commonSchemaFieldGroupModelType = {
  ...commonSchemaFieldGroupUniqueNameAndOptionalDescription,
  ...commonSchemaFieldGroupFooter,
};
