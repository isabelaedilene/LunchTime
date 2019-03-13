'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Pedidos', {
      idPedidos: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        index: true,
        type: DataTypes.INTEGER,

      },
      idCliente_fk: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      idRestaurante_fk: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      valorCompra: {
        allowNull: false,
        type: DataTypes.DOUBLE,
      },
      horarioChegada: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      statusPedido: {
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
    return queryInterface.dropTable('Pedidos');
  }
};
