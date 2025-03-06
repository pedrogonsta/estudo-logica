function alterarStatus(id) {
    let jogoCliclado = document.getElementById(`game-${id}`);
    let imagem = jogoCliclado.querySelector('.dashboard__item__img');
    let botao = jogoCliclado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';

    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';

    }
}
