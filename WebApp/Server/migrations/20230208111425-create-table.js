"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */

		await queryInterface.createTable("Users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			username: {
				type: Sequelize.STRING,
			},
			rule: {
				type: Sequelize.STRING,
			},
			firstName: {
				type: Sequelize.STRING,
			},
			lastName: {
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
			},
			password: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});

		await queryInterface.createTable("Themes", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			tag: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});

		await queryInterface
			.createTable("Formations", {
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},

				idTheme: {
					type: Sequelize.INTEGER,
					references: { model: "Themes", key: "id" },
				},
				description: {
					type: Sequelize.STRING,
				},
				price: {
					type: Sequelize.FLOAT,
				},
				createdAt: {
					allowNull: false,
					type: Sequelize.DATE,
				},
				updatedAt: {
					allowNull: false,
					type: Sequelize.DATE,
				},
			})
			.then(function () {
				queryInterface.createTable("FormationUsers", {
					idUser: {
						type: Sequelize.INTEGER,
						references: { model: "Users", key: "id" },
					},
					idFormation: {
						type: Sequelize.INTEGER,
						references: { model: "Formations", key: "id" },
					},
					createdAt: {
						allowNull: false,
						type: Sequelize.DATE,
					},
					updatedAt: {
						allowNull: false,
						type: Sequelize.DATE,
					},
				});
			});

		// FORMATION FILE
		await queryInterface.createTable("FormationFiles", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			idFormation: {
				type: Sequelize.INTEGER,
				references: { model: "Formations", key: "id" },
			},
			filename: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */

		await queryInterface.dropTable("FormationUsers");
		await queryInterface.dropTable("FormationFiles");
		await queryInterface.dropTable("Formations");
		await queryInterface.dropTable("Users");
		await queryInterface.dropTable("Themes");
	},
};
