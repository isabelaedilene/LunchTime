const models = require('../models');
const jwt = require('jsonwebtoken');

const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJwt  = passportJWT.ExtractJwt;

const JwtStrategy = passportJWT.Strategy;
const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = 'wowwow';

const strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
    models.Clientes.findOne({id: jwt_payload.id}, function (err, user) {
        if (err) {
            return next(err, false);
        }
        if (user) {
            next(null, user);
        } else {
            next(null, false);
        }
    })
});

passport.use(strategy);

exports.get = async (req, res) => {
    models.Clientes.findAll({
        include: [{all: true}],
    }).then(function (clientes) {
        res.json({
            clientes: clientes
        });
    });
};

exports.getById = async (req, res, next) => {
    models.Clientes.findByPk(req.params.id).then((result) => res.json(result))
};


exports.post = async (req, res) => {
    models.Clientes.create(req.body).then((result) => res.json(result))
};

exports.login = async (req, res) => {
    console.log("here");
    const name = req.body.emailCliente;
    const password = req.body.senhaCliente;
    if (name && password) {
        models.Clientes.findOne({
            where: {
                emailCliente: name
            }
        }).then(function (user) {
            if (!user) {
                res.status(401).json({ msg: "Usuario nao encontrado"});
            }
            if (user.senhaCliente === password) {
                let payload = { id: user.id };
                let token = jwt.sign(payload, jwtOptions.secretOrKey);
                res.json({ msg: 'ok', token: token, user: user})
            } else {
                res.status(401).json({ msg: "Senha incorreta"});
            }
        })
    }
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