"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class FormationUser extends Model {
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

      this.belongsTo(models.User, {
        foreignKey: "id",
        as: "idUser"
      })
    }
  }
  FormationUser.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      }
      // idUser: DataTypes.INTEGER,
      // idFormation: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "FormationUser"
    }
  )
  return FormationUser
}
