var jogada = null;
var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador_selecionado');
var vencedorSelecionado = document.getElementById('vencedor_selecionado');
var codigoSelecionado = document.getElementById('codigo_selecionado');
const codigoX = 'X'
const codigoO = 'O'
let jogador1 = ''
let Jogador2 = ''
x = 1
while(x < 2){
        
    jogador1 = prompt('Digite o nome do Jogador 1');
    if(jogador1 === '' || jogador1.length < 5) {
        alert('Digite um nome ou apelido acima de 4 caracteres')
    }else {
        jogador2 = prompt('Digite o nome do Jogador 2');
        if(jogador2 === '' || jogador2.length < 5) {
            alert('Digite um nome ou apelido acima de 4 caracteres')
        }else {
            x = x+1
        }
    }
    
    
}
alert('Bem vindos ' + jogador1 + ' e ' + jogador2 + '\nVamos ao Jogo que é um classico! \n' + jogador1 +
 ' é quem começa jogando com X !\nPrimeiro Clique em OK e depois clique em algum dos quadrados para iniciar as jogadas'); 

function escolherQuadrado(id){
    if(vencedor !== null) {
        return;
    }
    if (jogador1 === '' || jogador2 === null) {
        window.location.reload();
    }

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
        jogador = jogador2;
    }else {
        jogador = jogador1;
    }

    mudarJogador(jogador);
    mudarJogada(jogada);
    checaVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function mudarJogada(valor) {
    codigo = valor;
    codigoSelecionado.innerHTML = codigo;
}

function checaVencedor() {
    var quadrado1 = document.getElementById('1');
    var quadrado2 = document.getElementById('2');
    var quadrado3 = document.getElementById('3');
    var quadrado4 = document.getElementById('4');
    var quadrado5 = document.getElementById('5');
    var quadrado6 = document.getElementById('6');
    var quadrado7 = document.getElementById('7');
    var quadrado8 = document.getElementById('8');
    var quadrado9 = document.getElementById('9');
    if(checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }
    if(checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }
    if(checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }
    if(checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }
    if(checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
        return;
    }
    
}


function mudarVencedor(quadrado) {
    testaQuadradoVencedor = quadrado.innerHTML;
    if(testaQuadradoVencedor === 'O') {
        vencedor = jogador2;
    }else {
        vencedor = jogador1;
    }
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false;

    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;

    }
    return eigual;
}

function reiniciar() {
    window.location.reload();
    
    // vencedor = null;
    // vencedorSelecionado.innerHTML = '';
    // for(var i = 1; i <= 9; i++) {
    //     var quadrado = document.getElementById(i);
    //     quadrado.style.background = '#eee';
    //     quadrado.style.color = '#eee';
    //     quadrado.innerHTML = '-';
    // }
    // mudarJogador(jogador);


}