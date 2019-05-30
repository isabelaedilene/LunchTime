const Sequelize = require('sequelize');
const models = require('../models');

exports.post = (req, res, next) => {
    models.Pedidos.create({
        IdProduto: req.body.IdProduto,
        idCliente_fk: req.body.idCliente_fk,
        idRestaurante_fk: req.body.idRestaurante_fk,
        valorCompra: req.body.valorCompra,
        horarioChegada: req.body.horarioChegada,
        statusPedido: req.body.statusPedido
    }).then((result) => res.json(result))
};

exports.get = async (req, res, next) => {
    models.Pedidos.findAll({
        attributes: ['idPedidos', 'idCliente_fk', 'idRestaurante_fk', 'valorCompra', 'horarioChegada', 'statusPedido', 'IdProduto']
    }).then(function (pedidos) {
        res.json({
            pedidos: pedidos
        });
    });
};