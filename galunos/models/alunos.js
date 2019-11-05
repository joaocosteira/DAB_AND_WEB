const mongoose = require('mongoose')

var notaSchema = new mongoose.Schema({
    indicador: String,
    nota: Number
})

var alunosSchema = new mongoose.Schema({
    _id:String,
    nome: String, 
    curso: String, 
    notas: [notaSchema]
});

/*Aluno é o nome da coleção, metemos a palavra no singular e o mongo poem no plural
o conjunto
*/
module.express = mongoose.model('aluno',alunosSchema)


