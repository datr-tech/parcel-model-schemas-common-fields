import { commonSchemaFieldBaseAdminStatusId } from '@app-pmscf/schemas/fields/base';

describe('commonSchemaFieldBaseAdminStatusId', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      // Arrange
      const propRefExpected = 'admin/StatusModel';
      const propTypeExpected = 'ObjectId';

      // Act
      const propRefFound = commonSchemaFieldBaseAdminStatusId.ref;
      const propTypeFound = commonSchemaFieldBaseAdminStatusId.type;

      // Assert
      expect(propRefFound).toEqual(propRefExpected);
      expect(propTypeFound).toEqual(propTypeExpected);
    });
  });
});
