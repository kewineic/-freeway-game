function verificaColisao(){
    for(let contador = 0; contador < carros.length; contador++){
        if(
            (xPersonagem + wPersonagem) > xCarros[contador] && 
            xPersonagem < (xCarros[contador] + wCarros[contador]) &&
            yPersonagem < (yCarros[contador] + hCarros[contador]) &&
            yPersonagem + hPersonagem > yCarros[contador]
        ){
            yPersonagem = 368;
        };
        
    };
}
