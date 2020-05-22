//Personagem
var xPersonagem = 100;
var yPersonagem = 368; 
var wPersonagem = 28;
var hPersonagem = 28;

//teclado
var teclaCima = 38;
var teclaBaixo = 40;
var taxaTeclado = 4;

function movimentoPersonagem(evento){
    if(evento.keyCode == teclaCima){
        yPersonagem -= taxaTeclado

    }else if(evento.keyCode == teclaBaixo){
        yPersonagem += taxaTeclado
    }
}

document.onkeydown = movimentoPersonagem;