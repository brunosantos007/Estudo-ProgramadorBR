
/*var idade = 17

if( idade <= 70 && idade >= 18){
    console.log("Pode")
    console.log("Qual o seu pedido ?")
}else if(idade > 70){
    console.log("Não pode")
    console.log("já passou a idade de beber")
}else if(idade < 18){
    console.log("Não pode beber")
    console.log("Volte futuramente")
} */

var idade = 18

var pode = idade >= 18 ? true : false
console.log(pode)
var texto = `Gosto muito de chá, café e pão com ovo`
var palavraProcurada = texto.includes(`chá`) ? "Tem essa palavra" : "Não tem essa palavra"
console.log(palavraProcurada)


var nota1 = 8.0
var nota2 = 6.0

var media = (nota1 + nota2) / 2

var resultado = media >= 7.0 ? "Parabéns! Você Passou, tirou: " + media : "Sua nota " + media + " não foi o suficiente"
console.log(resultado)