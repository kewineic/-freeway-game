var tela = document.querySelector('canvas'); 
var pincel = tela.getContext('2d');
tela.width = 600;
tela.height = 400; 

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);
}

function atualizaTela() {
    desenhaFundo();
    desenhaPersonagem();

    movimentaCarros(0, 0, 620);
    desenhaCarro_1();

    movimentaCarros(1, 0, 620);
    desenhaCarro_2();

    movimentaCarros(2, 0, 620);
    desenhaCarro_3();
}

setInterval(atualizaTela, 10)