module.exports = (sequelize, DataTypes) => {
    const ImagemProduto = sequelize.define('ImagemProdutos', {
        idImagemProduto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nomeImagemProduto: DataTypes.STRING,
    });
    ImagemProduto.associate = models =>{
    ImagemProduto.belongsTo(models.Produtos, {foreignKey: 'idProduto_fk', targetKey: 'idProduto'});
    }
    return ImagemProduto;
  }