
var xCarros=[540, 540, 540,];
var yCarros=[40, 95, 150,];
var wCarros=[50, 50, 50,];
var hCarros=[40, 40, 40,];
var velocidadeCarros=[1.2, 1.4, 1.7,];

var xValorLimite = 0;
var xValorInicial = 620;

function movimentaCarros(xValorLimite, xValorInicial){
    for(let contador = 0; contador < carros.length; contador ++){
        if(xCarros[contador] < xValorLimite){ 
            xCarros[contador] = xValorInicial 
        };
        xCarros[contador] -= velocidadeCarros[contador];
    };
}