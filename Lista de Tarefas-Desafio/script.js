var numero = 0
var timer

function atualizarTexto(){
    let h = document.getElementsByTagName("h1")[0]
    h.innerHTML += " " + numero
    numero++
}

function iniciar(){
   
    interval = setTimeout(atualizarTexto,1000)
    //setTimeout(mudarCor,1000)
}

function parar(){
    clearTimeout(timer)
}