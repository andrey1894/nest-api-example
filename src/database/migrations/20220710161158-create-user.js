'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const sequelize = queryInterface.sequelize;
    const hashPassword = await bcrypt.hash('admin', 5);
    await queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'admin@admin.com',
          password: hashPassword,
          firstName: 'Admin',
          lastName: 'Admin',
          relationship: 'member',
          phone: '+491711234567',
          avatar: 'admin.jpg',
          membership: 'GOLD',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
    const adminRole = (await sequelize.query(`SELECT id FROM roles where value='ADMIN'`, { type: sequelize.QueryTypes.SELECT }))[0];
    const admin = (await sequelize.query(`SELECT id FROM users where email='admin@admin.com'`, { type: sequelize.QueryTypes.SELECT }))[0];

    await queryInterface.bulkInsert(
      'user-roles',
      [
        {
          roleId: adminRole.id,
          userId: admin.id,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
