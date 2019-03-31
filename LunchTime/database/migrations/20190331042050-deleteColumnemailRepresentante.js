'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Restaurantes', 'emailRepresentante');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Restaurantes', 'emailRepresentante', {
      type: Sequelize.STRING,
      field: 'emailRepresentante',
      allowNull: true,
    })
  }
};
