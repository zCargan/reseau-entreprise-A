"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Theme.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      tag: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Theme"
    }
  )
  return Theme
}
