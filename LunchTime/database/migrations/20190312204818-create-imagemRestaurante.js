'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('ImagemRestaurantes', {
      idImagemRestaurante: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        index: true,
        type: DataTypes.INTEGER,

      },
      idRestaurante_fk: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      nomeImagemRestaurante: {
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
    return queryInterface.dropTable('ImagemRestaurantes');
  }
};