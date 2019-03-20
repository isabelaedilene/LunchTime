
module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produtos', {
        idProduto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nomeProduto: DataTypes.STRING,
        ingredientesProduto: DataTypes.STRING,
        valorProduto: DataTypes.DOUBLE,
        valorPromocaoProduto: DataTypes.DOUBLE,
        tempoPreparo: DataTypes.STRING,
        dataInicioPromocao: DataTypes.DATE,
        dataFimPromocao: DataTypes.DATE,
    });
    Produto.associate = models =>{
    Produto.belongsTo(models.Restaurantes, {foreignKey: 'idRestaurante_fk', targetKey: 'idRestaurante'});
    Produto.hasMany(models.ImagemProdutos, {foreignKey: 'idProduto_fk', sourceKey: 'idProduto'});
    }
    return Produto;
  }