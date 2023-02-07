"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Formation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "id",
        as: "idUser"
      })

      this.belongsToMany(models.User, {
        through: models.FormationUser,
        foreignKey: "idFormation",
        as: "idFormation"
      })

      this.belongsTo(models.Theme, {
        foreignKey: "id",
        as: "idTheme"
      })
    }
  }
  Formation.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      // idUser: DataTypes.INTEGER,
      // idTheme: DataTypes.INTEGER,
      description: DataTypes.STRING,
      price: DataTypes.FLOAT
    },
    {
      sequelize,
      modelName: "Formation"
    }
  )
  return Formation
}
