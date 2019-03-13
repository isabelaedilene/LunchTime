const { Clientes } = require('./app/models');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));

var server = app.listen(9090, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('server start');
});
//Listar
app.get('/users', async (req, res) => {
    const user = await Clientes.findAll();
    res.json(user);
});
//Registrar Cliente
app.post('/users', async (req, res) => {
    const user = await Clientes.create(req.body);
    res.json(user);
});
//Pesquisar
app.get('/users/:codigo', async (req, res) => {
    const user = await Clientes.findAll({
        where: {
          idCliente: req.params.codigo
        }
      });
      res.json(user);
});
//Deletar
app.delete('/users/:codigo', async(req, res)=>{
    const user = await Clientes.destroy({
        where: {
            idCliente: req.params.codigo
        }
      });
});
//Atualizar
app.put('/users', async(req, res) => {
    const user = await Clientes.update({
        req,
      }, {
        where: {
            idCliente: req.params.codigo
        }
      });
});