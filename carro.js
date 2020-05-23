
var xCarros=[540, 540, 540, 540, 540, 540,];
var yCarros=[40, 95, 150, 210, 270, 318, ];
var wCarros=[50, 50, 50, 50, 50, 50,];
var hCarros=[40, 40, 40, 40, 40, 40,];
var velocidadeCarros=[1.2, 1.4, 1.7, 1.3, 1, 2,];

var xValorLimite = 0;
var xValorInicial = 620;

function movimentaCarros(){
    for(let contador = 0; contador < carros.length; contador ++){
        if(xCarros[contador] < xValorLimite){ 
            xCarros[contador] = xValorInicial 
        };
        xCarros[contador] -= velocidadeCarros[contador];
    };
}