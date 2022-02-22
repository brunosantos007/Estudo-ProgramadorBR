//Carne 400 gr por pessoa + de 6 horas - 650
//Cerveja - 1200 ML por pessoa + 6 horas - 2000ml
// Refrigerante / agua - 1000ml de agua por pessoa + 6 horas 1500ml

// Crainças valem por 0.5

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular(){
    console.log("Calculando")

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let qdtTotalCarne =  carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas)
    let qdtTotalCerva = cervejaPorPessoa(duracao) * adultos
    let qdtTotalRefri =  refriAguaPorPessoa(duracao) * adultos + (refriAguaPorPessoa(duracao) / 2 * criancas)


    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} g de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerva / 355)} latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalRefri / 2000)} Garrafas de Bebida</p>`
}

function carnePorPessoa(duracao){
    if(duracao >= 6){
        return 650
    }else{
        return 400
    }
}
function cervejaPorPessoa(duracao){
    if(duracao >= 6){
        return 2000
    }else{
        return 1200
    }
}

function refriAguaPorPessoa(duracao){
    if(duracao >= 6){
        return 1500
    }else{
        return 1000
    }
}