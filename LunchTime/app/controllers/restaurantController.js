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