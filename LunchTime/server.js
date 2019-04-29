const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

// import models
const models = require('./app/models');

const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJwt  = passportJWT.ExtractJwt;

// Strategy com JWT token
const JwtStrategy = passportJWT.Strategy;
const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = 'wowwow';

// criação da strategy
// função getUser precisa ser revista, importada, whatever...............
const strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
    models.Restaurantes.findOne({id: jwt_payload.id}, function (err, user) {
        if (err) {
            return next(err, false);
        }
        if (user) {
            next(null, user);
        } else {
            next(null, false);
        }
    })
    /*let user = getUser({ id: jwt_payload.id });
    if (user) {
        next(null, user);
    } else {
        next(null, false);
    }*/
});

// Informa ao passport para usar nossa strategy criada acima
passport.use(strategy);

const app = express();
// incialização do passport com express
app.use(passport.initialize());

// parse json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Importação dos controllers locais
const index = require('./app/routes/index');
const restaurantRoute = require('./app/routes/restaurantRoute');
const clientRoute = require('./app/routes/clientRoute');



const getUser = async obj => {
    return await models.Restaurantes.findOne({
        where: obj,
    });
};

// Rota de login
app.post('/login', async function (req, res, next) {
    console.log("here");
    const name = req.body.emailRestaurante;
    const password = req.body.senhaRestaurante;
    if (name && password) {
        models.Restaurantes.findOne({
            where: {
                emailRestaurante: name
            }
        }).then(function (user) {
            if (!user) {
                res.status(401).json({ msg: "Usuario nao encontrado"});
            }
            if (user.senhaRestaurante === password) {
                let payload = { id: user.id };
                let token = jwt.sign(payload, jwtOptions.secretOrKey);
                res.json({ msg: 'ok', token: token, user: user})
            } else {
                res.status(401).json({ msg: "Senha incorreta"});
            }
        })
    }
});

// Rotas da Aplicação Back-End
app.use('/', index);
app.use('/restaurant', restaurantRoute);
app.use('/client', clientRoute);

// Server funcionando vai exibir essa mensagem no console, porta 9090
var server = app.listen(9090, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('server started');
});

