var jogada = null;
var jogador = null;
var jogadorSelecionado = document.getElementById('jogador_selecionado');
var codigoSelecionado = document.getElementById('codigo_selecionado');
const codigoX = 'X'
const codigoO = 'O'
let jogador1 = ''
let Jogador2 = ''
x = 1
while(x < 2){
        
    jogador1 = prompt('Digite o nome do Jogador 1');
    Jogador2 = prompt('Digite o nome do Jogador 2');
    x = x+1
}
alert('Bem vindos ' + jogador1 + ' e ' + Jogador2 + '\nVamos ao Jogo que é um classico! \n' + jogador1 +
 ' é quem começa jogando com X !\nPrimeiro Clique em OK e depois clique em algum dos quadrados para iniciar as jogadas'); 

function escolherQuadrado(id){
    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML === 'X' || quadrado.innerHTML === 'O') { 
        return;
    }
    quadrado.innerHTML = jogada;
    quadrado.style.color = '#000';

    if(jogada === 'X') {
        jogada = codigoO;
    }else {
        jogada = codigoX;
    }
    if(jogador === jogador1) {
        jogador = Jogador2;
    }else {
        jogador = jogador1;
    }

    mudarJogador(jogador);
    mudarJogada(jogada);
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function mudarJogada(valor) {
    codigo = valor;
    codigoSelecionado.innerHTML = codigo;

}
    


// function playGame() {
//     x = 1
//     while(x < 2){
        
//         var jogador1 = prompt('Digite o nome do Jogador 1');
//         var Jogador2 = prompt('Digite o nome do Jogador 2');
//         x = x+1
//     }
//     alert('Bem vindos ' + jogador1 + ' e ' + Jogador2 + '\nVamos ao Jogo que é um classico! \n' + jogador1 + ' é quem começa jogando com X !');
//     mudarJogada(codigoX);
//     mudarJogador(jogador1);
// }


// playGame();