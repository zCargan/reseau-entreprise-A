"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class FormationFile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Formation, {
        foreignKey: "id",
        as: "idFormation"
      })
    }
  }
  FormationFile.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      // idFormation: DataTypes.INTEGER,
      filename: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "FormationFile"
    }
  )
  return FormationFile
}
