//criar a função para habilitar e desabilitar botão
function alterarStatus(id) {
    let gameId = document.getElementById(`game-${id}`);
    let imgJogo = gameId.querySelector('.dashboard__item__img');
    let nomeJogo = gameId.querySelector('.dashboard__item__name');
    let botaoJogo = gameId.querySelector('.dashboard__item__button');

    console.log(nomeJogo.textContent);

    if(imgJogo.classList.contains('dashboard__item__img--rented')) {
        let confirmarAlteracao = confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`);
        if(!confirmarAlteracao) {
        
        imgJogo.classList.add('dashboard__item__img--rented');
        botaoJogo.classList.add('dashboard__item__button--return');
        botaoJogo.textContent = 'Devolver';
        }
    }else {
        imgJogo.classList.remove('dashboard__item__img--rented');
        botaoJogo.classList.remove('dashboard__item__button--return');
        botaoJogo.textContent = 'Alugar';
    }
}