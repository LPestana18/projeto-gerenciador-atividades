const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const lembreteRoutes = require('./rotas/lembretes');
const Lembrete = require('./models/lembrete');

const lembretes = [
  {
    id: '1',
    atividade: 'Projeto livros',
    dataCadastro: '2020-11-11',
    dataEntrega: '2020-11-17'
  },
  {
    id: '2',
    atividade: 'Projeto GPS',
    dataCadastro: '2020-12-11',
    dataEntrega: '2020-12-17'
  }
]

mongoose.connect('mongodb+srv://admin:uE5mhlodEWfgSZzi@cluster0.5m8t5.mongodb.net/app-mean?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log("Conexão OK")
}).catch(() =>{
  console.log("Conexão não está funcionando!");
})


app.use(bodyParser.json());

app.use ((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  next();
  });

app.use('/api/lembretes',lembreteRoutes);

module.exports = app;
