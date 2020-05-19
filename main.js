var tela = document.querySelector('canvas'); 
var pincel = tela.getContext('2d');
tela.width = 600;
tela.height = 400; 

function desenhaImg(url, x1, y1, w1, h1){
    let fundoTela = new Image(); 
    fundoTela.src = url;
    let x = x1;
    let y = y1;
    let w = w1;
    let h = h1;

    fundoTela.onload = function(){
        pincel.drawImage(fundoTela, x, y, w, h);
    };
};

//fundoTela
var xfundoTela = 0;
var yfundoTela = 0;
var wfundoTela = 600;
var hfundoTela = 400;

//Carro-1
var xCarro_1 = 540;
var yCarro_1 = 40;
var wCarro_1 = 50;
var hCarro_1 = 40;
var taxaCarro_1 = .5;

//Personagem
var xPersonagem = 100;
var yPersonagem = 368; 
var wPersonagem = 28;
var hPersonagem = 28;

//teclado
var teclaCima = 38;
var teclaBaixo = 40;
var taxaTeclado = 4;

function desenhaFundo(){
    desenhaImg('./media/estrada.png', xfundoTela, yfundoTela, wfundoTela, hfundoTela);
}

function desenhaPersonagem(){
    desenhaImg('./media/ator-1.png', xPersonagem, yPersonagem, wPersonagem, hPersonagem);
}

function desenhaCarro_1(){
    desenhaImg( './media/carro-1.png', xCarro_1, yCarro_1, wCarro_1, hCarro_1); 
}

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);
}

function movimentaCarro(){
    if(xCarro_1 < 0){xCarro_1 = 620}
    xCarro_1 -= taxaCarro_1;
}

function movimentoPersonagem(evento) {
    if (evento.keyCode == teclaCima) {
        yPersonagem -= taxaTeclado

    } else if (evento.keyCode == teclaBaixo) {
        yPersonagem += taxaTeclado
    }
}

function atualizaTela() {
    desenhaFundo();
    desenhaPersonagem();
    movimentaCarro();
    desenhaCarro_1();
}

document.onkeydown = movimentoPersonagem;
setInterval(atualizaTela, 10)