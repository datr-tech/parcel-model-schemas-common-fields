import { commonSchemaFieldBaseAdminUserId } from '@app-pmscf/schemas/fields/base';

describe('commonSchemaFieldBaseAdminUserId', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      // Arrange
      const propRefExpected = 'persona/UserModel';
      const propTypeExpected = 'ObjectId';

      // Act
      const propRefFound = commonSchemaFieldBaseAdminUserId.ref;
      const propTypeFound = commonSchemaFieldBaseAdminUserId.type;

      // Assert
      expect(propRefFound).toEqual(propRefExpected);
      expect(propTypeFound).toEqual(propTypeExpected);
    });
  });
});
