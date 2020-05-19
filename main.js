var tela = document.querySelector('canvas'); 
var pincel = tela.getContext('2d');
tela.width = 600;
tela.height = 400; 

function desenhaImg(url, x1, y1, w1, h1){
    let fundoTela = new Image(); 
    fundoTela.src = url;
    let x = x1;
    let y = y1;
    let w = w1;
    let h = h1;

    fundoTela.onload = function(){
        pincel.drawImage(fundoTela, x, y, w, h);
    };
};

//fundoTela
var xfundoTela = 0;
var yfundoTela = 0;
var wfundoTela = 600;
var hfundoTela = 400;
desenhaImg('./media/estrada.png', xfundoTela, yfundoTela, wfundoTela, hfundoTela);

//Personagem
var xPersonagem = 100;
var yPersonagem = 368; 
var wPersonagem = 28;
var hPersonagem = 28;
desenhaImg('./media/ator-1.png', xPersonagem, yPersonagem, wPersonagem, hPersonagem);

//Carro-1
var xCarro_1 = 540;
var yCarro_1 = 40;
var wCarro_1 = 50;
var hCarro_1 = 40;
desenhaImg('./media/carro-1.png', xCarro_1, yCarro_1, wCarro_1, hCarro_1); 

