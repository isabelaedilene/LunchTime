'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Restaurantes', 'nomeRepresentante');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Restaurantes', 'nomeRepresentante', {
      type: Sequelize.STRING,
      field: 'nomeRepresentante',
      allowNull: true,
    })
  }
};
