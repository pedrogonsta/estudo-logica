function adicionar() {
    // recuperar valores: nome produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]; // split quebra uma informação com a partir de um separador e devolve uma array
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    
    // checar se usuário adicionou pelomenos um item no carrinho
    if (quantidade < 1) {
        alert('Por favor adicione a quantidade desejada');
    } else {
        // calcular o subtotal 
        let subTotal = quantidade * valorUnitario;
        // adicionar produto no carrinho
        let carrinhoDeCompras = document.getElementById('lista-produtos');
        carrinhoDeCompras.innerHTML = carrinhoDeCompras.innerHTML + `<section class="carrinho__produtos__produto">
                                      <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
                                      </section>`;
    
        // adicionar o valor total da compra
        totalGeral = totalGeral + subTotal;

        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${totalGeral}`;

        // limpar campo quantidade
        document.getElementById('quantidade').value = '';
    }    
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = ' ';
    document.getElementById('valor-total').textContent = 0;

}

// escopo principal;
let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = ' ';
document.getElementById('valor-total').textContent = 0;
