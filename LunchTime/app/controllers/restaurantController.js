const models = require('../models');

exports.get = async (req, res, next) => {
    models.Restaurantes.findAll({
        include: [{all: true}],
    }).then(function (restaurantes) {
        res.json({
            restaurantes: restaurantes
        });
    });
};

exports.getById = async (req, res, next) => {
    models.Restaurantes.findById(req.params.id).then((result) => res.json(result))
};

exports.search = async (req, res) => {
    const user = null; 
    if(req.params.nomeRestaurante !== null && req.params.tipoRestaurante !== null){
    user = await models.Restaurantes.findAll({
        where: {
          nomeRestaurante: {
              [Op.like]: '%'+req.params.nomeRestaurante+'%'
            },
            tipoRestaurante: {
                [Op.like]: '%'+req.params.tipoRestaurante+'%'
            }
        }
      });
    }else if(req.params.nomeRestaurante !== null && req.params.tipoRestaurante == null){
        user = await models.Restaurantes.findAll({
            where: {
              nomeRestaurante: {
                  [Op.like]: '%'+req.params.nomeRestaurante+'%'
                }
            }
          });
    }else if(req.params.nomeRestaurante == null && req.params.tipoRestaurante !== null){
        user = await models.Restaurantes.findAll({
            where: {
                tipoRestaurante: {
                    [Op.like]: '%'+req.params.tipoRestaurante+'%'
                }
            }
          });
    }else {
        user = await models.Restaurantes.findAll();
    }
      res.json(user);
};



exports.post = (req, res, next) => {
    models.Restaurantes.create({
        nomeRestaurante: req.body.nomeRestaurante,
        cnpjRestaurante: req.body.cnpjRestaurante,
        telefoneRestaurante: req.body.telefoneRestaurante,
        emailRestaurante: req.body.emailRestaurante,
        senhaRestaurante: req.body.senhaRestaurante,
        cepRestaurante: req.body.cepRestaurante,
        estadoRestaurante: req.body.estadoRestaurante,
        cidadeRestaurante: req.body.cidadeRestaurante,
        bairroRestaurante: req.body.bairroRestaurante,
        ruaRestaurante: req.body.ruaRestaurante,
        numeroRestaurante: req.body.numeroRestaurante,
        pontoReferenciaRestaurante: req.body.pontoReferenciaRestaurante,
        complementoRestaurante: req.body.complementoRestaurante,
        tipoRestaurante: req.body.tipoRestaurante,
    }).then((result) => res.json(result))
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    models.Restaurantes.destroy({
        where: {
            idRestaurante: req.params.id
        }
    }).then((result) => res.json(result))
};