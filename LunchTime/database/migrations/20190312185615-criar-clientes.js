'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Clientes', {
      idCliente: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        index: true,
        type: DataTypes.INTEGER,

      },
      nomeCliente: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      emailCliente: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      senhaCliente: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      telefoneCliente: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Clientes');
  }
};
