const models = require('../models');

exports.get = async (req, res) => {
    models.Restaurantes.findAll({
        include: [{all: true}],
    }).then(function (restaurantes) {
        res.json({
            restaurantes: restaurantes
        });
    });
};

exports.getById = (req, res, next) => {
    res.status(200).send('Requisição recebida com sucesso!');
};



exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};