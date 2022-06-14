'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     await queryInterface.addColumn(
      'Categories',
      'action',
      {
        type: Sequelize.STRING,
        defaultValue: "healing",
      }
    )

    await queryInterface.addColumn(
      'Categories',
      'active',
      {
        type: Sequelize.STRING,
        defaultValue: "false",
      }
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
