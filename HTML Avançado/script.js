let audio = document.getElementById("music")
let btnPlay = document.getElementById("btn-play")
let btnPause = document.getElementById("btn-pause")


function play(){
    audio.play()
    play.style.display = "none"
    pause.style.display = "block"
}
function pause(){
    audio.pause()
    pause.style.display = "nonne"
    pause.style.display = "block"
}

