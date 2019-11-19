const express = require('express')
const router = express.Router()
const axios = require('fs')
var Ficheiros = require('../controllers/ficheiros')
var Ficheiro = require('../models/ficheiro') //acho eu
//const lhost = require('../config/env').host



router.get('/',function(req,res){
  axios.get(host + 'api/ficheiros')
    .then(dados=>{

      res.render('index',{lista: dados.data});
    })
    .catch(erro =>{
        res.render('erro',{error:erro})
    })
})


router.get('dowload/:fnome',function(req,res){

    res.download(__dirname + '/../public/ficheiros/' + req.params.fnome)
})


router.post('/ficheiros',upload.single('ficheiro',function(req,res){


    let oldPath = __dirname + '/../' + req.file.path 
    let newPath = __dirname + '/../public/ficheiros' + req.file.originalname 

    fs.rename(oldPath,newPath,function(err){
        if(err) throw err 
    })
    let data = new Date()

    let novoFicheiro = new Ficheiro({
        data: data.toISOString(),
        desc: req.body.desc,
        name: req.file.originalname,
        mimetype: req.file.mimetype,
        size:req.file.size
    })


    novoFicheiro.save(function(err,ficheiro){

        if(!err) console.log('Ficheiro guardado com sucesso!')
        else console.log('Erro' + err)
    })

    res.redirect('/')
}))
module.exports = router;

