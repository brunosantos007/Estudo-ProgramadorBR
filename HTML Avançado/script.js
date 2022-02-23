let cor = document.getElementById("color")
let audio = document.getElementById("music")
let btnPlay = document.getElementById("btn-play")
let btnPause = document.getElementById("btn-pause")
let img = document.getElementById("img")
let musica = document.getElementById("music")
let back = document.getElementById("back")
let next = document.getElementById("next")

btnPause.style.display = "none"



function play(){
    audio.play()
    btnPlay.setAttribute("id","btn-pause")
    btnPause.style.display = "inline-block"
    btnPlay.style.display = "none"
}
function pause(){
    audio.pause()
    btnPause.setAttribute("id","btn-play")
    btnPause.style.display = "none"
    btnPlay.style.display = "inline-block"
}
function musicaAnterior(){
    for(let i = 0; i < back.value;i--){
        return 0
    }
}

function proximaMusica(){
    pause()
    img.setAttribute("src","imagens/alleyes on me.png")
    musica.setAttribute("src","musicas/2Pac - All Eyez On Me (128 kbps).mp3")
    //body.style.backgroundColor = rgba(0, 0, 0, 0.822)
}
