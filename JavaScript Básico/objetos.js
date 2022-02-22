
const pessoas = {
    nome: { //OBJETO DE OBJETO
        first: "Bob",
        last: "Smith"
    },
    //nomesExtras: ["Bruno","Santos"], ARRAY DENTRO DO OBJETO
    idade: 32,
    biografia:function(){ // DUAS FORMAS DE FUNÇÃO DENTRO DO OBJETO
        console.log(`${this.nome.first} ${this.nome.last} tem ${this.idade}`)
    },
    introducao(){
        console.log(`Hello! Eu sou o ${this.nome.first}, tenho ${this.idade}`)
    }
}
//console.log(pessoas.nomesExtras[0])

/// MUDANDO AS PROPRIEDADES
pessoas.idade = 45
pessoas["nome"]["first"] = "Bruno"

// ADICIONANDO PROPRIEDADES/FUNÇÕES

pessoas["olhos"] = "Blue"
pessoas.byebye = function(){
    console.log("Bye everybody")
}


console.log(pessoas.idade)
console.log(pessoas["nome"]["first"])

console.log(pessoas.olhos)
console.log(pessoas.byebye())