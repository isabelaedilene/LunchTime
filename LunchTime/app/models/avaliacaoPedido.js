module.exports = (sequelize, DataTypes) => {
    const AvaliacaoPedido = sequelize.define('AvaliacaoPedidos', {
        idAvaliacaoPedido: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        notaPedido: DataTypes.INTEGER,
        comentarioPedido: DataTypes.STRING,
    });
    AvaliacaoPedido.associate = models =>{
        AvaliacaoPedido.belongsTo(models.Pedidos, {foreignKey: 'idPedido_fk', targetKey: 'idPedido'});
    }

    return AvaliacaoPedido;
  }