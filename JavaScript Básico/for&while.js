
/*var numero = Math.random() * 100


/*for( var i = 0; i < numero.math; i++){
    console.log("Executando o for, pela " + i + " vez")
    
}*/

/*while(numero < 90){
    console.log(numero)
    numero = Math.random() * 100
}

console.log("ACABOU")
console.log(numero) */

let contador = 0

while(contador <= 100){
    if(contador % 3 === 0 && contador % 5 === 0){
        console.log(contador + "-Multiplo de 3 e 5")
    }else if(contador % 3 === 0){
        console.log(contador + "-Multiplo de 3")
    }else if(contador % 5){
        console.log(contador + "-Multiplo de 5")
    }else{
        console.log("Não é multiplo de 3 e 5")
    }
    ++contador
}