"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class formation_file extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      formation_file.belongsTo(models.formation)
    }
  }
  formation_file.init(
    {
      filename: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "formation_file"
    }
  )
  return formation_file
}
