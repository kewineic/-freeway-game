
let xCarros=[540, 540, 540,];
let yCarros=[40, 95, 150,];
let wCarros=[50, 50, 50,];
let hCarros=[40, 40, 40,];
let velocidadeCarros=[1.2, 1.4, 1.7,];

//Carro-1
function movimentaCarros(numCarro, xLimite, xInicial){
    if(xCarros[numCarro] < xLimite){ 
        xCarros[numCarro] = xInicial 
    };

    xCarros[numCarro] -= velocidadeCarros[numCarro];
}