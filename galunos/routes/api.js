const express = require('express');
const router = express.Router();


var Alunos = require('../controllers/alunos')


router.get('/alunos',function(req,res) {
    Alunos.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})


router.get('/alunos/:idAluno',function(req,res) {
    Alunos.consultar(req.parms.idAluno)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})



router.post('/alunos',function(req,res){
    Alunos.inserir(req.body)
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).jsonp(erro))
})


router.delete('/alunos/:idAluno',function(req,res){
    Alunos.remover(req.params.idAluno)
    //nao tenho a certeza destes
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).jsonp(erro))
})


//PUT: alterar um aluno
router.put('/alunos',function(req,res){
    Alunos.alterar(req.body)
    .then(dados=>res.jsonp(dados))
    .catch(erro=>res.status(500).jsonp(erro))
})


module.exports=router 