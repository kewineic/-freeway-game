
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

function desenhaCarros(){
    for(let contador = 0; contador < carros.length; contador++){
        desenhaImg(
            carros[contador], 
            xCarros[contador],
            yCarros[contador], 
            wCarros[contador], 
            hCarros[contador],
        ); 
    };
}