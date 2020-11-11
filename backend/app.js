const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
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

mongoose.connect('mongodb+srv://lucas:nw9i8Dmd10dHRXdz@cluster0.5m8t5.mongodb.net/app-mean?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
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

app.get('/api/lembretes', (req, res, next) => {
  Lembrete.find().then(documents => {
    console.log(documents);
    res.status(200).json({
      mensagem: "Tudo OK",
      lembretes: documents
    });
  })
});

app.post('/api/lembretes', (req, res, next) => {
    const lembrete = new Lembrete({
      dataCadastro: req.body.dataCadastro,
      dataEntrega: req.body.dataEntrega,
      atividade: req.body.atividade
    })
    lembrete.save().then(lembreteInserido => {
      res.status(201).json({
        mensagem: 'Lembrete inserido',
        id: lembreteInserido._id
      })
    })
});

app.delete('/api/lembretes/:id', (req, res, next) => {
  Lembrete.deleteOne({_id: req.params.id}).then((resultado) => {
    console.log(resultado);
    res.status(200).json({mensagem: "Lembrete removido"})
  })
})

app.use('/api/lembretes', (req, res, next) => {
  res.status(200).json({
    mensagem: "Tudo OK",
    lembretes: lembretes
  });
});

app.put("/api/lembretes/:id", (req, res, next) => {
  const lembrete = new Lembrete({
    _id: req.params.id,
    dataCadastro: req.params.dataCadastro,
    dataEntrega: req.params.dataEntrega,
    atividade: req.params.atividade
  });
  Lembrete.updateOne({_id: req.params.id}, lembrete)
  .then((resultado) => {
    console.log(resultado);
  });
  res.status(200).json({mensagem: 'Atualizaçãom realizada com sucesso!'})
})

app.get('/api/lembretes/:id', (req, res, next) => {
  Lembrete.findById(req.params.id).then(lem => {
    if(lem) {
      res.status(200).json(lem);
    }
    else{
      res.status(404).json({mensagem: "Lembrete não encontrado!"})
    }
  })
})

module.exports = app;
