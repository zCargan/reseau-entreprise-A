"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      theme.hasMany(models.formation)
    }
  }
  theme.init(
    {
      libelle: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "theme"
    }
  )
  return theme
}
