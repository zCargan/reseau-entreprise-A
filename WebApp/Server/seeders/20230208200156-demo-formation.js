"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("formations", [
      {
        themeId: 1,
        description: "Formation en développement web",
        price: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: 2,
        description: "Formation en développement mobile",
        price: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: 3,
        description: "Formation en réseau",
        price: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: 4,
        description: "Formation en administration système",
        price: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: 5,
        description: "Formation en sécurité",
        price: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: 6,
        description: "Formation en mathématiques",
        price: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: 7,
        description: "Formation en physique",
        price: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: 8,
        description: "Formation en Anglais",
        price: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("formations", null, {})
  }
}
