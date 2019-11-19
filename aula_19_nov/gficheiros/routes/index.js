const express = require('express')
const router = express.Router()
const axios = require('axios')
const lhost = require('../config/env').host



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

module.exports = router;

