'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        customValidator(value) {
          if (value === '') {
            throw new Error('name is required')
          }
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        customValidator(value) {
          let reg = new RegExp(/^[0-9]+$/)
          if (value === '') {
            throw new Error('price is required')
          } else if(value < 0) {
            throw new Error('price cannot be lower than 0')
          } else if (!reg.test(value)) {
            throw new Error('number only')
          }
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      validate: {
        customValidator(value) {
          let reg = new RegExp(/^[0-9]+$/)
          if (value === '') {
            throw new Error('stock is required')
          } else if(value < 0) {
            throw new Error('stock cannot be lower than 0')
          } else if (!reg.test(value)) {
            throw new Error('number only')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};