/*var alunos1 = new Array("Igor","josé","Bruno","Maria")

var alunos = ["Igor","josé","Bruno","Maria","Joana","Rafael"]
*/

let numeros = [10,48,37,22,28,18,68,93]
numeros.sort

for( var i of numeros){

    numeros.sort()
    if( i > 50){
        console.log(i + " é maior que 50")
    }else if(i < 50){
        console.log(i + " é menor do que 50")
    }else{
        console.log("Erro")
    }
}

let alunos = ["Igor","josé","Bruno","Maria"]

for(var j in alunos){
    console.log(j + "-" + alunos[j])
}

/*for(var aluno of alunos){
    console.log(aluno)
} */

/*for(var i in alunos){
    console.log(alunos[i])
}*/

/*for(var i = 0; i < alunos.length; i++){
    console.log(alunos[i])
} */

