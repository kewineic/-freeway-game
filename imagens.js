
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
var carro_1 = './media/carro-1.png'; 

function desenhaFundo(){
    desenhaImg(fundoTela, xfundoTela, yfundoTela, wfundoTela, hfundoTela);
}

function desenhaPersonagem(){
    desenhaImg(personagem, xPersonagem, yPersonagem, wPersonagem, hPersonagem);
}

function desenhaCarro_1(){
    desenhaImg(carro_1, xCarro_1, yCarro_1, wCarro_1, hCarro_1); 
}
