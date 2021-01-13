'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("Permissions", {
      fields: ["UserId"],
      type: "foreign key",
      name: "custom_fkey_UserId",
      references: {
        table: "Users",
        field: "id"
      },
      onDelete: "Cascade",
      onUpdate: "Cascade"
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint("Permissions", "UserId")
  }
};
