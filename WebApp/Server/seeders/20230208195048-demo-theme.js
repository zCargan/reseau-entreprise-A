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
    await queryInterface.bulkInsert("Themes", [
      {
        libelle: "Développement Web",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        libelle: "Développement Mobile",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        libelle: "Réseau",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        libelle: "Administration Système",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        libelle: "Sécurité",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        libelle: "Mathématiques",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        libelle: "Physique",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        libelle: "Anglais",
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

    await queryInterface.bulkDelete("Themes", null, {})
  }
}
