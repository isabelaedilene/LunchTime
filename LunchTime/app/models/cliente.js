module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Clientes', {
        idCliente: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
      nomeCliente: DataTypes.STRING,
      emailCliente: DataTypes.STRING,
      senhaCliente: DataTypes.STRING,
      telefoneCliente: DataTypes.STRING,
    });
    Cliente.associate = models =>{
    Cliente.belongsToMany(models.Restaurantes, { through: models.Pedidos, foreignKey: 'idCliente_fk'});
    Cliente.belongsToMany(models.Restaurantes, { through: models.AvaliacaoRestaurantes, foreignKey: 'idCliente_fk'});
    }
    return Cliente;
  }