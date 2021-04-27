const express = require('express');
const routes = express.Router();
const funcionarioController = require('./controllers/Funcionario');

routes
    .get('/get', funcionarioController.index)
    .get('/get/:id', funcionarioController.show)
    .post('/post', funcionarioController.create)
    .put('/put/:id', funcionarioController.update)
    .delete('/delete/:id', funcionarioController.delete)

module.exports = routes;