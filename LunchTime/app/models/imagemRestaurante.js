module.exports = (sequelize, DataTypes) => {
    const ImagemRestaurante = sequelize.define('ImagemRestaurantes', {
        idImagemRestaurante: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nomeImagemRestaurante: DataTypes.STRING,
    });
    ImagemRestaurante.associate = models =>{
    ImagemRestaurante.belongsTo(models.Restaurantes, {foreignKey: 'idRestaurante_fk', targetKey: 'idRestaurante'});
    }
    return ImagemRestaurante;
  }