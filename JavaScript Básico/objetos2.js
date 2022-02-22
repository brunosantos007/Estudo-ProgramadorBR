



/*const pessoa1 = {
    nome: "Chris",
    introducao(){
        console.log(`Olá eu sou o ${this.nome}`)
    }
}

const pessoa2 = {
    nome: "Deepti",
    introducao(){
        console.log(`Olá eu sou o ${this.nome}`)
    }
}*/

/*function criarPessoa(nome){
    const obj = {}
    obj.nome = nome,
    obj.introducao = function(){
        console.log(`Olá! eu sou o ${this.nome}`)
    }
    return obj
}
console.log(criarPessoa())
console.log(salva.nome)
console.log(salva.introducao())
console.log(frankie.nome)
console.log(frankie.introducao())*/

function Pessoa(nome){
    this.nome = nome
    this.introducao = function(){
        console.log(`Ola! Eu sou o ${this.nome}`)
    }
}

const salva = new Pessoa("Salva")
salva.idade = 25
salva["nome"] = "Bruno"
console.log(Pessoa)
console.log(salva.idade)
console.log(salva.nome)
console.log(salva.introducao())

const frankie = new Pessoa("Frankie")
console.log(frankie)
console.log(frankie.nome)
console.log(frankie.introducao())


