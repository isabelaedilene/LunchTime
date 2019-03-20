'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Restaurantes', {
      idRestaurante: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        index: true,
        type: DataTypes.INTEGER,

      },
      nomeRestaurante: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cnpjRestaurante: {
        allowNull: false,
        unique: true,
        index: true,
        type: DataTypes.STRING,
      },
      telefoneRestaurante: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      emailRestaurante: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      senhaRestaurante: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      nomeRepresentante: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      emailRepresentante: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      telefoneRepresentante: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cepRestaurante: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      estadoRestaurante: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cidadeRestaurante: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      bairroRestaurante: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      ruaRestaurante: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      numeroRestaurante: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      pontoReferenciaRestaurante: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      complementoRestaurante: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      tipoRestaurante: {
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
    return queryInterface.dropTable('Restaurantes');
  }
};
