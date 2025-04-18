import { commonSchemaFieldDefAdminStatusIdOptionalUndefined } from '../../../../../dist';

describe('commonSchemaFieldDefAdminStatusIdOptionalUndefined', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      // Arrange
      const propsExpected = {
        default: 'undefined',
        ref: 'admin/StatusModel',
        required: false,
        type: 'ObjectId',
      };

      // Act
      const propsFound = { ...commonSchemaFieldDefAdminStatusIdOptionalUndefined };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
