'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('AvaliacaoPedidos', {
      idAvaliacaoPedido: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        index: true,
        type: DataTypes.INTEGER,

      },
      idPedido_fk: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      notaPedido: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      comentarioPedido: {
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
    return queryInterface.dropTable('AvaliacaoPedidos');
  }
};

