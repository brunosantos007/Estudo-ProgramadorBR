
/*function criarAluno(nome,n1,n2){
    return{
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: calcMedia = function(){
            return (this.nota1 + this.nota2) / 2
        }
    }
} */

/*var calcMedia = function(){
    return (this.nota1 + this.nota2) / 2
} */

function aluno(nome,n1,n2){
    this.nome = nome,
    this.nota1 = n1,
    this.nota2 = n2

    this.media = function(){
        return (this.nota1 + this.nota2) / 2
    }
}

/*var turma = [

    criarAluno("Igor",9,6),
    criarAluno("João",7,4),
    criarAluno("Bruno",10,7)
    /*{
        nome: "Igor",
        nota1: 9,
        nota2: 7,
        media: calcMedia
    },
    {
        nome: "João",
        nota1: 4,
        nota2: 3,
        media: calcMedia
    },
] */

var a = new aluno("Igor",8,7)

console.log(a)

//var aluno = turma[2]

/*for(var aluno of turma){
    console.log(aluno.nome + " - "+ aluno.media())
}

/*turma.forEach(function(elemento){
    console.log(elemento)
})*/

//var aluno = criarAluno("Igor",8,7.5)
///console.log(aluno)
//console.log(aluno.media()) 