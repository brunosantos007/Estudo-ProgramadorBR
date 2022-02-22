//Carne 400 gr por pessoa + de 6 horas - 650
//Cerveja - 1200 ML por pessoa + 6 horas - 2000ml
// Refrigerante / agua - 1000ml de agua por pessoa + 6 horas 1500ml

// Crainças valem por 0.5

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

function calcular(){
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value
    let resultado = document.getElementById("resultado")

   if(duracao >= 6){
       var carne = 650
       var cerveja = 2000
       var refri = 1500
   }else{
       var carne = 400
       var cerveja = 1200
       var refri = 1000
   }

   let totaldeCarne = (adultos*carne) + (criancas*carne* 0.5)
   let totalDeCerveja = (adultos*cerveja)
   let totalDeRefri = (adultos*refri) + (criancas*refri* 0.5)

   resultado.innerHTML = `<p>${totaldeCarne} g de Carne</p>`
   resultado.innerHTML += `<p>${Math.ceil(totalDeCerveja / 355)} ml de Cerveja</p>`
   resultado.innerHTML += `<p>${Math.ceil(totalDeRefri / 2000)} Garrafas de Bebida</p>`
    
}

