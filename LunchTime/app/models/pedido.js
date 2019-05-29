
module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define('Pedidos', {
        idPedidos: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
      valorCompra: DataTypes.DOUBLE,
      horarioChegada: DataTypes.STRING,
      statusPedido: DataTypes.STRING,
    });
    Pedido.associate = models =>{
        Pedido.belongsTo(models.Restaurantes, {foreignKey: 'idRestaurante_fk', targetKey: 'idRestaurante'});
        Pedido.hasMany(models.ImagemPedidos, {foreignKey: 'idPedido_fk', sourceKey: 'idPedidos'});
        Pedido.hasOne(models.AvaliacaoPedidos, {foreignKey: 'idPedido_fk'});
    }
    return Pedido;
  }