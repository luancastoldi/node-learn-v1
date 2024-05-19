"use strict"

comecaJogo();

function comecaJogo(){
  mapeiaCartasJogador();
}


function mapeiaCartasJogador(){
    document.querySelectorAll('.hand-player>span').forEach(element => {
        element.addEventListener('click', ()=>{
            element.style.animation = "carta-jogada 0.8s"
            setTimeout(() => {
                element.style.animation = ""
            }, 1000);
        })
    })
}