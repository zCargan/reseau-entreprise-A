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
      FormationFile.belongsTo(models.Formation)
    }
  }
  FormationFile.init(
    {
      filename: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "FormationFile"
    }
  )
  return FormationFile
}
