function resetaPosicaoY(){
    yPersonagem = 368;
}

function verificaColisao(){
    for(let contador = 0; contador < carros.length; contador++){
        if(
            (xPersonagem + wPersonagem) > xCarros[contador] && 
            xPersonagem < (xCarros[contador] + wCarros[contador]) &&
            yPersonagem < (yCarros[contador] + hCarros[contador]) &&
            yPersonagem + hPersonagem > yCarros[contador]
        ){
            resetaPosicaoY();
            somColisao();
            if(meusPontos > 0){
                meusPontos--
            };
        };
        
    };
}

function verificaSePontuou(){
    if(yPersonagem < 15){
        resetaPosicaoY();
        somPontuacao();
        meusPontos++
    };
}
