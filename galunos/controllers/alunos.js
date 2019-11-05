var Aluno = require('../models/alunos')


module.exports.listar = () =>{
    return Aluno
        .find()
        .exec()

}

module.exports.consultar = id =>{
    return Aluno
        .findOne({_id:id})
        .exec()
}
//Devolve o # de alunos na base de dados
module.exports.contar = () =>{
    return Aluno 
        .consultDocuments()
        .exec()
}


module.exports.inserir = aluno =>{
    var novo=new Aluno(aluno)
    return novo.save()
}


//nao é preciso o exec 
module.exports.remover = function(id){
    return Aluno.deleteOne({_id:id})
}

module.exports.alterar = function (aluno) {
    return Aluno.findByIdAndUpdate({_id: aluno._id},aluno,{new: true}).exec()
}
