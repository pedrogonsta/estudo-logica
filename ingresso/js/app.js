// atualiza ingressos Pista
function comprarPista(qnt) {
    if (qnt <= quantPista) {
        quantPista = quantPista - qnt;
        document.getElementById('qtd-pista').textContent = quantPista;
        alert('Compra realizada com sucesso!');
    } else {
        alert('Quantidade Indisponível!');
    }
}

// atualiza ingressos Superior
function comprarSuperior(qnt) {
    if (qnt <= quantSuperior) {
        quantSuperior = quantSuperior - qnt;
        document.getElementById('qtd-superior').textContent = quantSuperior;
        alert('Compra realizada com sucesso!');
    } else {
        alert('Quantidade Indisponível!');
    }
}

// atualiza ingressos Inferior
function comprarInferior(qnt) {
    if (qnt <= quantInferior) {
        quantInferior = quantInferior - qnt;
        document.getElementById('qtd-inferior').textContent = quantInferior;
        alert('Compra realizada com sucesso!');
    } else {
        alert('Quantidade Indisponível!');
    }
}

function comprar() {
    // resgatar valores inseridos nos formulários
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    if (quantidade <= 0) {
        alert('Digite um valor positivo para quantidade!')
        return;
    }
    
    // atualizar quantidade de ingressos vendidos 
    if (tipoIngresso == 'pista') {
        comprarPista(quantidade);
    } else if (tipoIngresso == 'superior') {
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }
    
}

// resgatar valores das quantitades de ingressos disponiveis
let quantPista = parseInt(document.getElementById('qtd-pista').textContent);
let quantSuperior = parseInt(document.getElementById('qtd-superior').textContent);
let quantInferior = parseInt(document.getElementById('qtd-inferior').textContent);
