const models = require('../models');

exports.get = async (req, res) => {
    models.Clientes.findAll({
        include: [{all: true}],
    }).then(function (clientes) {
        res.json({
            clientes: clientes
        });
    });
};


exports.post = async (req, res) => {
    const user = await models.Clientes.create(req.body);
    //res.json(user);
};


exports.put = async (req, res) => {
    const user = await models.Clientes.update({
        req,
      }, {
        where: {
            idCliente: req.params.codigo
        }
      });
};

exports.delete = async (req, res) => {
    const user = await models.Clientes.destroy({
        where: {
            idCliente: req.params.codigo
        }
      });
};