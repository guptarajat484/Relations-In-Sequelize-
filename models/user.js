'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    post_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  User.associate=function(models){
    //User.hasOne(models.Post,{foreignKey:'user_id',as:'postDetail'})
   User.hasMany(models.Post,{foreignKey:'user_id',as:'postDetail'})
  }
  return User;
};