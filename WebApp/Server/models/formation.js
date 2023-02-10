"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class formation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      console.log(models)
      // define association here
      formation.belongsToMany(models.user, {
        through: "user_formation",
        foreignKey: "formation_id",
        otherKey: "user_id"
      })

      formation.hasMany(models.formation_file)
      formation.belongsTo(models.theme, {
        foreignKey: "themeId",
        as: "theme"
      })
    }
  }
  formation.init(
    {
      description: DataTypes.STRING,
      price: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "formation"
    }
  )
  return formation
}
