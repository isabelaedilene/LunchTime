module.exports = (sequelize, DataTypes) => {
    const AvaliacaoRestaurante = sequelize.define('AvaliacaoRestaurantes', {
        idAvaliacaoRestaurante: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        notaAvaliacao: DataTypes.INTEGER,
        comentarioAvaliacao: DataTypes.STRING,
    });
  
    return AvaliacaoRestaurante;
  }