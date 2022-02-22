/*var media = function(n1,n2){
    return (n1 + n2) / 2
}

var m = media(6,5)

console.log(media(6,5)) //
console.log(m) */

var nome = prompt("Qual seu nome ?")
alert("Digite suas notas de cada bimestre da materia desejada.")

var b1 = parseFloat(prompt("Olá "+ nome + " Digite sua media no primeiro bimestre:"))
var b2 = parseFloat(prompt("Agora digite a do segundo bimestre:"))
var b3 = parseFloat(prompt("Agora a do terceiro bimestre."))
var b4 = parseFloat(prompt("Agora do quarto bimestre:"))

function mediaAnual(){
    return (b1+b2+b3+b4) / 4
}

var x = mediaAnual(b1,b2,b3,b4)

alert("Sua média foi :"+ x)

if(x < 7){
    alert("Não foi desta vez, tente novamente!")
}else if(x >= 7){
    alert("Parabéns, você esta aprovado!")
}else{
    alert("Valor invalido, contate a diretoria!")
}