// exibi a quantidade de jogos que já foram alugados
function exibirQuantidadeLocacoes() {
    let palavraJogo = numeroLocacoes > 1 ? 'jogos': 'jogo';
    console.log(`Já foram alugados ${numeroLocacoes} ${palavraJogo}`);
}

function alterarStatus(id) {
    // capturar elementos da tela
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');
    let nomeJogo = jogoClicado.querySelector('.dashboard__item__name');

    // mudar aparencia e texto dos jogos ao serem alugados/devolvivdos
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // adiciona confirmação pro usuário devolver o game
        if(confirm(`Tem certeza que você deseja devolver o jogo ${nomeJogo.textContent}`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';   
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        numeroLocacoes++;
        }
        exibirQuantidadeLocacoes();
    }
    

let numeroLocacoes = 0;

