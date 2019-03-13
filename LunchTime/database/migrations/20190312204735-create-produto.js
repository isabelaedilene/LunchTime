module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Produtos', {
      idProduto: {
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
      nomeProduto: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      ingredientesProduto: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      valorProduto: {
        allowNull: false,
        type: DataTypes.DOUBLE,
      },
      valorPromocaoProduto: {
        allowNull: true,
        type: DataTypes.DOUBLE,
      },
      tempoPreparo: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      dataInicioPromocao: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      dataFimPromocao: {
        allowNull: true,
        type: DataTypes.DATE,
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
    return queryInterface.dropTable('Produtos');
  }
};
