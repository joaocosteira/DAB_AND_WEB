var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET. lista de alunos */
router.get('/', function(req, res, next) {

  axios.get('http://lcoalhost:3005/api/alunos')
    .then(dados=>{
        res.render('lista-alunos',{lista:dados.data});
    })
    .catch(erro =>{
      res.render('error',{error:erro})
      })
 // res.render('lista-alinos')
});

/*
  Importante:
    Este get tem de estar acima do /:idAluno, 
    pois isso do id é uma string, logo esse iria comer qulquer pedidio, e nunca entraria neste caso
*/
router.get('/inserir',function(req,res){
  res.render('form-aluno')
})

//Get REcupera informaçao de um aluno

router.get('/:idAluno',function(req,res){
  axios.get('http://lcoalhost:3005/api/alunos/' + req.params.idAluno)
  .then(dados=>{
      res.render('pag-aluno',{aluno:dados.data});
  })
  .catch(erro =>{
    res.render('error',{error:erro})
    })
});


router.get('/editar/:idAluno',function(req,res){
  axios.get('http://lcoalhost:3005/api/alunos/' + req.params.idAluno)
  .then(dados=>{
      res.render('edita-aluno',{aluno:dados.data});
  })
  .catch(erro =>{
    res.render('error',{error:erro})
    })

})






router.post('/',function(req,res){
  axios.put('http://lcoalhost:3005/api/alunos/' + req.body)
  .then(dados=>{
      res.redirect('/')
  })
  .catch(erro =>{
    res.render('error',{error:erro})
    })
});


router.post('/editar', function(req,res){
  axios.put('http://lcoalhost:3005/api/alunos/' + req.body)
    .then(dados => {
      res.redirect('/')
    })
    .catch(erro => {
        res.render('error',{error:erro})
    })
})


module.exports = router;


