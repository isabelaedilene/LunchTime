module.exports = (sequelize, DataTypes) => {
    const ImagemPedido = sequelize.define('ImagemPedidos', {
        idImagemPedido: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nomeImagemPedido: DataTypes.STRING,
    });
    ImagemPedido.associate = models =>{
    ImagemPedido.belongsTo(models.Pedidos, {foreignKey: 'idPedido_fk', targetKey: 'idPedidos'});
    }
    return ImagemPedido;
  }