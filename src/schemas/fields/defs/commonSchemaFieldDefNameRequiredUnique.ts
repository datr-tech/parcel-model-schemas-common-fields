import { ICommonSchemaFieldDefNameUnique } from '@app-parcel-model-schemas-common-fields/interfaces/schemas/fields/defs';
import { commonSchemaFieldQualifierUnique } from '../qualifiers/commonSchemaFieldQualifierUnique';
import { commonSchemaFieldDefNameRequired } from './commonSchemaFieldDefNameRequired';

export const commonSchemaFieldDefNameRequiredUnique = {
  ...commonSchemaFieldQualifierUnique,
  ...commonSchemaFieldDefNameRequired,
} as ICommonSchemaFieldDefNameUnique;
