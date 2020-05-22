
function desenhaImg(url, x1, y1, w1, h1){
    let img = new Image(); 
    img.src = url;
    let x = x1;
    let y = y1;
    let w = w1;
    let h = h1;

    img.onload = function(){
        pincel.drawImage(img, x, y, w, h);
    };
};

//fundoTela
var xfundoTela = 0;
var yfundoTela = 0;
var wfundoTela = 600;
var hfundoTela = 400;

//imagens
var fundoTela = './media/estrada.png'; 
var personagem = './media/ator-1.png';
let carros = [
    './media/carro-1.png', 
    './media/carro-2.png', 
    './media/carro-3.png',
];

function desenhaFundo(){
    desenhaImg(fundoTela, xfundoTela, yfundoTela, wfundoTela, hfundoTela);
}

function desenhaPersonagem(){
    desenhaImg(personagem, xPersonagem, yPersonagem, wPersonagem, hPersonagem);
}

function desenhaCarro_1(){
    desenhaImg(carros[0], xCarros[0], yCarros[0], wCarros[0], hCarros[0]); 
}

function desenhaCarro_2(){
    desenhaImg(carros[1], xCarros[1], yCarros[1], wCarros[1], hCarros[1]); 
}

function desenhaCarro_3(){
    desenhaImg(carros[2], xCarros[2], yCarros[2], wCarros[2], hCarros[2]); 
}