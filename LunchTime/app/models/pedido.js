
module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define('Pedidos', {
        idPedido: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
      valorCompra: DataTypes.DOUBLE,
      horarioChegada: DataTypes.STRING,
      statusPedido: DataTypes.STRING,
    });
    Pedido.associate = models =>{
    Pedido.hasMany(models.ImagemPedidos, {foreignKey: 'idPedido_fk', sourceKey: 'idPedido'});
    Pedido.hasOne(models.AvaliacaoPedidos, {foreignKey: 'idPedido_fk'});
    }
    return Pedido;
  }