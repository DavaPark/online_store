'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Brand', [
      {
        id: 1,
        name: 'Samsung'
      },
      {
        id: 2,
        name: 'Apple'
      },
    ])

    await queryInterface.bulkInsert('Type', [
      {
        id: 1,
        name: 'Холодильники'
      },
      {
        id: 2,
        name: 'Смартфоны'
      },
    ])

    await  queryInterface.bulkInsert('Device',[
      {
        id: 1,
        name: '12',
        price: '1000',
        brandId: 2,
        typeId: 2,
        rating: 0
      },
      {
        id: 2,
        name: 'note 10',
        price: '1000',
        brandId: 1,
        typeId: 2,
        rating: 0
      },
    ])

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Brand', null);
    await queryInterface.bulkDelete('Type', null);
    await queryInterface.bulkDelete('Device', null);
  }
};
