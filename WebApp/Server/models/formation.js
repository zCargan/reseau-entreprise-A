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
      Formation.belongsToMany(models.User, {
        through: "UserFormation",
        foreignKey: "formationId",
        otherKey: "userId"
      })

      Formation.hasMany(models.FormationFile)
      Formation.belongsTo(models.Theme)
    }
  }
  Formation.init(
    {
      description: DataTypes.STRING,
      price: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Formation"
    }
  )
  return Formation
}
