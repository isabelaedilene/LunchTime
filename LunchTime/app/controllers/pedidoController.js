const Sequelize = require('sequelize');
const models = require('../models');

exports.post = (req, res, next) => {
    models.Pedidos.create({
        idCliente_fk: req.body.idCliente,
        idRestaurante_fk: req.body.idRestaurante,
        valorCompra: req.body.valorCompra,
        horarioChegada: req.body.horarioChegada,
        statusPedido: req.body.statusPedido,
        IdProduto: req.body.IdProduto
    }).then((result) => res.json(result))
};

exports.get = async (req, res, next) => {
    models.Pedidos.findAll({
        include: [{all: true}],
    }).then(function (pedidos) {
        res.json({
            pedidos: pedidos
        });
    });
};