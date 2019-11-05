function apagaAluno(ident){
    console.log('Vou apagar o aluno: ' + ident)
    axios.delete('/api/alunos/' +iden)
        .then(response => window.location.assogn('/alunos'))
        .catch(error => console.log(error))

}

/*
 O stor mandou isto de piço
function editaAluno(ident){
    console.log('Vou editar o aluno: ' + ident)
    axios.get('/alunos/editar/' +iden)
        .then(response => console.log('1'))
        .catch(error => console.log(error))

}
*/