'use strict';

const {DataTypes} = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await  queryInterface.createTable('User',{
      id: {type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      email: {type: DataTypes.STRING, unique: true,},
      password: {type: DataTypes.STRING},
      role: {type: Sequelize.DataTypes.STRING, defaultValue: "USER"},
    });

    await  queryInterface.createTable('Basket',{
      id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
    });

    await  queryInterface.createTable('BasketDevice',{
      id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
    });

    await  queryInterface.createTable('Device',{
      id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      name: {type: DataTypes.STRING, unique: true, allowNull: false},
      price: {type: DataTypes.INTEGER, allowNull: false},
      rating: {type: DataTypes.INTEGER, defaultValue: 0},
      img: {type: DataTypes.STRING, allowNull: false}
    });

    await  queryInterface.createTable('Type',{
      id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
      name: {type: DataTypes.STRING, unique: true, allowNull: false}
    });

    await  queryInterface.createTable('Brand',{
      id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,allowNull: false},
      name: {type: DataTypes.STRING, unique: true, allowNull: false},
    });

    await  queryInterface.createTable('Rating',{
      id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      rate: {type: DataTypes.INTEGER, allowNull: false},
    });

    await  queryInterface.createTable('DeviceInfo',{
      id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      title: {type: DataTypes.STRING, allowNull: false},
      description: {type: DataTypes.STRING, allowNull: false},
    });

    await  queryInterface.createTable('TypeBrand',{
      id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('User');
    await queryInterface.dropTable('Basket');
    await queryInterface.dropTable('BasketDevice');
    await queryInterface.dropTable('Device');
    await queryInterface.dropTable('Type');
    await queryInterface.dropTable('Brand');
    await queryInterface.dropTable('Rating');
    await queryInterface.dropTable('DeviceInfo');
    await queryInterface.dropTable('TypeBrand');
  }
};
