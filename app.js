const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json())

require('./src/models/Usuario');
const Usuario = mongoose.model('usuarios');

require('./src/db/connect');

app.get('/', function(req,res) {
    res.render('index');
});

app.get("/", async (req,res) => {
    const usuariosResponse = await Usuario.find();
    const usuariosJson = await usuariosResponse;

    return res.json(usuariosJson);
});

app.get('/index', async(req,res) =>{
    const novoUsuario = new Usuario({
        nome:req.body.nome,
        email:req.body.email,
        senha:req.body.senha,

    })
    novoUsuario.save()
    res.json({message: "Cadastrado com sucesso", usuario:novoUsuario})
});


app.listen(3006);