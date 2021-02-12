const mongoose = require("mongoose")

function connect(){
    mongoose
    .connect('mongodb://localhost/comentario',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log('Conectado com o Banco');
    })
    .catch((error)=>{
        console.log('Não conectado');
    });
}
module.exports=connect()