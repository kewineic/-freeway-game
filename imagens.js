
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

function mostraPontuacao(){
    pincel.font = "bold 16pt Arial";
    pincel.textAlign = 'center';
    pincel.fillStyle = 'orange';
    pincel.strokeStyle = "white";
    pincel.fillRect(230, 8, 40, 20);
    pincel.strokeRect(230, 8, 40, 20);
    pincel.fillStyle = 'white';
    pincel.fillText(meusPontos, 250, 26);
}

function renderizaImagens(){
    desenhaImg(fundoTela, xfundoTela, yfundoTela, wfundoTela, hfundoTela);

    desenhaImg(personagem, xPersonagem, yPersonagem, wPersonagem, hPersonagem);

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