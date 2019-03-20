'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('ImagemProdutos', {
      idImagemProduto: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        index: true,
        type: DataTypes.INTEGER,

      },
      idProduto_fk: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      nomeImagemProduto: {
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
    return queryInterface.dropTable('ImagemProdutos');
  }
};