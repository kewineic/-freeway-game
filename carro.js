//Carro-1
var xCarro_1 = 540;
var yCarro_1 = 40;
var wCarro_1 = 50;
var hCarro_1 = 40;
var taxaCarro_1 = .5;

function movimentaCarro(){
    if(xCarro_1 < 0){xCarro_1 = 620}
    xCarro_1 -= taxaCarro_1;
}