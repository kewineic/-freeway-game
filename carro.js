//Carro-1
var xCarro_1 = 540;
var yCarro_1 = 40;
var wCarro_1 = 50;
var hCarro_1 = 40;
var velocidadeCarro_1 = 1.2;

function movimentaCarro(){
    if(xCarro_1 < 0){xCarro_1 = 620}
    xCarro_1 -= velocidadeCarro_1;
}

//Carro-2
var xCarro_2 = 540;
var yCarro_2 = 95;
var wCarro_2 = 50;
var hCarro_2 = 40;
var velocidadeCarro_2 = 1.4;

function movimentaCarro_2(){
    if(xCarro_2 < 0){xCarro_2 = 620}
    xCarro_2 -= velocidadeCarro_2;
}

//Carro-3
var xCarro_3 = 540;
var yCarro_3 = 150;
var wCarro_3 = 50;
var hCarro_3 = 40;
var velocidadeCarro_3 = 1.7;

function movimentaCarro_3(){
    if(xCarro_3 < 0){xCarro_3 = 620}
    xCarro_3 -= velocidadeCarro_3;
}