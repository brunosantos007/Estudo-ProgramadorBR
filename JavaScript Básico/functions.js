

function media(n1,n2){
    var nota1 = n1
    var nota2 = n2
    var media = (nota1 + nota2) / 2

    //console.log(resultado)
    return media
}

var resultado1 = media(6,7)
var resultado2 = media(7,7)

console.log(resultado1)
console.log(resultado2)


/*let a = 50
let b = 100

function verificaNumero(){
    return a < b
}
console.log(verificaNumero()) */

function bolasDeFutebol(numeroDeBolas){
    for(bolasRoubadas = 0;bolasRoubadas <= numeroDeBolas; bolasRoubadas++){
        console.log("Você tem "+ bolasRoubadas + " bolas"+ "\n e roubaram "+(numeroDeBolas - bolasRoubadas) + " bolas")
    }
    console.log("Não roubaram nenhuma bola de futebol sua")
}

bolasDeFutebol(10)

function comerPizza(numeroDeFatias){
    for(fatiasComidas = 0; fatiasComidas <= numeroDeFatias; fatiasComidas++){
        console.log("Você comeu " + fatiasComidas + " fatias" + "\nRestam " +(numeroDeFatias - fatiasComidas)+ " fatias")
    }
    console.log("Você comeu toda a pizza!")
}
comerPizza(10)