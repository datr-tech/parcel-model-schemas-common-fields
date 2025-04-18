import { commonSchemaFieldDefAdminUserIdRequired } from '@app/schemas/fields/defs';

describe('commonSchemaFieldDefAdminUserIdRequired', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      // Arrange
      const propsExpected = {
        ref: 'persona/UserModel',
        required: true,
        type: 'ObjectId',
      };

      // Act
      const propsFound = { ...commonSchemaFieldDefAdminUserIdRequired };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
