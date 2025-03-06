function geradorDeNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function sortear() {
    // pegando dados dos campos
    let quantidadeNumeros;
    let doNumero;
    let ateNumero;

    do {
        quantidadeNumeros = parseInt(document.getElementById('quantidade').value);
        doNumero = parseInt(document.getElementById('de').value);
        ateNumero = parseInt(document.getElementById('ate').value);

        if (doNumero >= ateNumero) {
            alert('O número inicial deve ser menor que o final!');
            reiniciar();
        }
    } while (doNumero >= ateNumero);
    

    // gerando uma lista de números aleatórios
    let listaNumeros = [];
    let numeroDeElementosPossiveis = ateNumero - doNumero + 1;
    let numero = 0;

    // verificando se temos um intervalo de números válido para não gerar um loop infinito
    if (numeroDeElementosPossiveis <= quantidadeNumeros) {
        alert('Por favor aumente o intervalo de números!');
        reiniciar();
    } else {
        for (let i = 0; i < quantidadeNumeros; i++) {
            while (listaNumeros.includes(numero)) {
                numero = geradorDeNumeroAleatorio(doNumero, ateNumero);
            }
            listaNumeros.push(numero);
            console.log(listaNumeros);
        }
    }
    
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${listaNumeros}</label>`;

    alterarStatusBotao();
}

function alterarStatusBotao() {
    let botaoReininciar = document.getElementById('btn-reiniciar');
    if (botaoReininciar.classList.contains('container__botao-desabilitado') ) {
        botaoReininciar.classList.remove('container__botao-desabilitado');
        botaoReininciar.classList.add('container__botao');
    } else {
        botaoReininciar.classList.remove('container__botao');
        botaoReininciar.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}
