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
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'The email is already taken!'
      },
      validate: {
        customValidator(value) {
          let reg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
          if (value === '') {
            throw new Error('Email harus diisi')
          } else if (!reg.test(String(value).toLowerCase())) {
            throw new Error('Format Email salah')
          }
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        customValidator(value) {
          let reg = new RegExp(/^[a-zA-Z0-9]+$/)
          if (value === '') {
            throw new Error('Password harus diisi')
          } else if (!reg.test(value)) {
            throw new Error('Password hanya boleh menggunakan huruf dan angka')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user, opt) => {
        user.password = hashPassword(user.password)
      }
    }
  });
  return User;
};