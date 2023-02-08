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

    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "Rachiid007",
          rule: "teacher",
          firstName: "Abderrachid",
          lastName: "BELLAALI",
          email: "rachid-fake@gmail.com",
          password: "123456",
          avatar: "https://avatars.githubusercontent.com/u/91373823?v=4",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "Killer-B",
          rule: "teacher",
          firstName: "Patson",
          lastName: "CARDIN",
          email: "patson-fake@gmail.com",
          password: "123456",
          avatar: "https://avatars.githubusercontent.com/u/74672498?v=4",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "MaZeppAa",
          rule: "student",
          firstName: "Michaël",
          lastName: "POURBAIX",
          email: "machael-fake@gmail.com",
          password: "123456",
          avatar: "https://avatars.githubusercontent.com/u/71372371?v=4",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "HaAymar",
          rule: "student",
          firstName: "Aymar",
          lastName: "HAKIZIMANA",
          email: "aymar-fake@gmail.com",
          password: "123456",
          avatar: "https://avatars.githubusercontent.com/u/71372488?v=4",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Users", null, {})
  }
}
