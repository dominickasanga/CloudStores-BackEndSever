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
      'Sales',
      'quantity',
      {
        type: Sequelize.INTEGER
      }
    )

    await queryInterface.addColumn(
      'Sales',
      'price',
      {
        type: Sequelize.INTEGER
      }
    )

    await queryInterface.addColumn(
      'Sales',
      'total',
      {
        type: Sequelize.INTEGER
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
