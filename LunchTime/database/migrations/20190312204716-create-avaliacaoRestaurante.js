'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('AvaliacaoRestaurantes', {
      idAvaliacaoRestaurante: {
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
      notaAvaliacao: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      comentarioAvaliacao: {
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
    return queryInterface.dropTable('AvaliacaoRestaurantes');
  }
};
