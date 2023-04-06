'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await  queryInterface.bulkInsert('Brand',[
      {
        id: 1,
        name: 'Samsung'
      },
      {
        id: 2,
        name: 'Apple'
      },
    ])

    await  queryInterface.bulkInsert('Type',[
      {
        id: 1,
        name: 'Холодильники'
      },
      {
        id: 2,
        name: 'Смартфоны'
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Brand', null);
    await queryInterface.bulkDelete('Type', null);
  }
};
