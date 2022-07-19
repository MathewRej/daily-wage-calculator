'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dailyWorkData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dailyWorkData.init({
    date: DataTypes.DATE,
    workDetails: DataTypes.STRING,
    employeeDetails: DataTypes.JSON,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'dailyWorkData',
  });
  return dailyWorkData;
};