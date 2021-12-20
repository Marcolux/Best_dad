'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.hasMany(models.fav_quote)
      models.user.hasMany(models.fav_fun_fact)
      models.user.hasMany(models.fav_dad_joke)
    }
  };
  user.init({
    name: DataTypes.STRING,
    email: {
      type :Sequelize.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    zodiac_sign: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};