const Sequelize = require('sequelize');
const models = require('../models');
const Op = Sequelize.Op;

exports.get = async (req, res, next) => {
    models.Produtos.findAllfindAll({
            where: {
              idRestaurante_fk: req.params.idRestaurante
            }
          }).then(function (produtos) {
        res.json({
            produtos: produtos
        });
    });
};

exports.getById = async (req, res, next) => {
    models.Produtos.findById(req.params.id).then((result) => res.json(result))
};

exports.search = async (req, res) => {
    var user = null; 
    if(req.body.nomeRestaurante !== '' && req.body.tipoRestaurante !== ''){
    user = await models.Produtos.findAll({
        where: {
          nomeRestaurante: {
              [Op.like]: '%'+req.body.nomeRestaurante+'%'
            },
            tipoRestaurante: {
                [Op.like]: '%'+req.body.tipoRestaurante+'%'
            }
        }
      });
    }else if(req.body.nomeRestaurante !== '' && req.body.tipoRestaurante == ''){
        user = await models.Produtos.findAll({
            where: {
              nomeRestaurante: {
                  [Op.like]: '%'+req.body.nomeRestaurante+'%'
                }
            }
          });
    }else if(req.body.nomeRestaurante == '' && req.body.tipoRestaurante !== ''){
        user = await models.Produtos.findAll({
            where: {
                tipoRestaurante: {
                    [Op.like]: '%'+req.body.tipoRestaurante+'%'
                }
            }
          });
    }else {
        user = await models.Produtos.findAll();
    }
      res.json(user);
};



exports.post = (req, res, next) => {
    models.Produtos.create({
        nomeProduto: req.body.nomeProduto,
        ingredientesProduto: req.body.ingredientesProduto,
        valorProduto: req.body.valorProduto,
        valorPromocaoProduto: req.body.valorPromocaoProduto,
        tempoPreparo: req.body.tempoPreparo,
        dataInicioPromocao: req.body.dataInicioPromocao,
        dataFimPromocao: req.body.dataFimPromocao,
        idRestaurante_fk: req.body.idRestaurante_fk,
    }).then((result) => res.json(result))
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    models.Produtos.destroy({
        where: {
            idProduto: req.params.id
        }
    }).then((result) => res.json(result))
};