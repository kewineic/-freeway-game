var tela = document.querySelector('canvas'); 
var pincel = tela.getContext('2d');
tela.width = 600;
tela.height = 400; 

function atualizaTela(){
    renderizaImagens();
    movimentaCarros();
    verificaColisao();   
    verificaSePontuou();
}

setInterval(atualizaTela, 20);
setInterval(mostraPontuacao, 1);