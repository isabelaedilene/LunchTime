'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Restaurantes', 'telefoneRepresentante');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Restaurantes', 'telefoneRepresentante', {
      type: Sequelize.STRING,
      field: 'telefoneRepresentante',
      allowNull: true,
    })
  }
};
