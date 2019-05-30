const Sequelize = require('sequelize');
const models = require('../models');
const mysql = require('mysql');


let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lunchDB',
    port: '3306',
});

connection.connect();

exports.get = async (req, res, next) => {
    models.Pedidos.findAll({
        attributes: ['idPedidos', 'idCliente_fk', 'idRestaurante_fk', 'valorCompra', 'horarioChegada', 'statusPedido', 'IdProduto']
    }).then(function (pedidos) {
        res.json({
            pedidos: pedidos
        });
    });
};

exports.post = (req, res) => {
    let pedido = {
        IdProduto: req.body.IdProduto,
        idCliente_fk: req.body.idCliente_fk,
        idRestaurante_fk: req.body.idRestaurante_fk,
        valorCompra: req.body.valorCompra,
        horarioChegada: req.body.horarioChegada,
        statusPedido: req.body.statusPedido,
        createdAt: '2019-04-25 20:12:59',
        updatedAt: '2019-04-25 20:12:59',
    };

    let query = "INSERT INTO `pedidos` " +
        "(IdProduto, idCliente_fk, idRestaurante_fk, valorCompra, horarioChegada, statusPedido, createdAt, updatedAt )" +
        "VALUES" +
        "(?, ?, ?, ?, ?, ?, ?, ?)";

    connection.query(query, [pedido.IdProduto, pedido.idCliente_fk, pedido.idRestaurante_fk, pedido.valorCompra, pedido.horarioChegada, pedido.statusPedido, pedido.createdAt, pedido.updatedAt], function (err, result) {
        if (err) throw err;
        console.log("Value inserted ")
    });
};