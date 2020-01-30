'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('products', [
      {
        name: 'Café',
        price: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Torrada',
        price: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hamburguer',
        price: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Água',
        price: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Refrigerante',
        price: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('products', null, {});
  }
};
