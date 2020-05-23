var tela = document.querySelector('canvas'); 
var pincel = tela.getContext('2d');
tela.width = 600;
tela.height = 400; 

function limpaTela(){
    pincel.clearRect(0, 0, 600, 400);
}

function atualizaTela(){
    desenhaFundo();
    desenhaPersonagem();
    desenhaCarros();
    movimentaCarros();
    verificaColisao();
}

setInterval(atualizaTela, 10);