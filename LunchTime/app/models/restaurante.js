
module.exports = (sequelize, DataTypes) => {
    const Restaurante = sequelize.define('Restaurantes', {
        idRestaurante: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
    
          },
          nomeRestaurante: DataTypes.STRING,
          cnpjRestaurante: DataTypes.STRING,
          telefoneRestaurante: DataTypes.STRING,
          emailRestaurante: DataTypes.STRING,
          senhaRestaurante: DataTypes.STRING,
          nomeRepresentante: DataTypes.STRING,
          emailRepresentante: DataTypes.STRING,
          telefoneRepresentante: DataTypes.STRING,
          cepRestaurante: DataTypes.STRING,
          estadoRestaurante: DataTypes.STRING,
          cidadeRestaurante: DataTypes.STRING,
          bairroRestaurante: DataTypes.STRING,
          ruaRestaurante: DataTypes.STRING,
          numeroRestaurante: DataTypes.INTEGER,
          pontoReferenciaRestaurante: DataTypes.STRING,
          complementoRestaurante: DataTypes.STRING,
          tipoRestaurante: DataTypes.STRING,
    });
    Restaurante.associate = models =>{
    Restaurante.hasMany(models.Produtos, {foreignKey: 'idRestaurante_fk', sourceKey: 'idRestaurante'});
    Restaurante.hasMany(models.ImagemRestaurantes, {foreignKey: 'idRestaurante_fk', sourceKey: 'idRestaurante'});
    Restaurante.belongsToMany(models.Clientes, { through: models.Pedidos, foreignKey: 'idRestaurante_fk'});
    Restaurante.belongsToMany(models.Clientes, { through: models.AvaliacaoRestaurantes, foreignKey: 'idRestaurante_fk'});
    }
    return Restaurante;
  }