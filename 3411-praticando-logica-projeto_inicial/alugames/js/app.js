//criar a função para habilitar e desabilitar botão
function alterarStatus(id) {
    let gameId = document.getElementById(`game-${id}`);
    let imgJogo = gameId.querySelector('.dashboard__item__img');
    let nomeJogo = gameId.querySelector('.dashboard__item__name');
    let botaoJogo = gameId.querySelector('.dashboard__item__button');

    console.log(nomeJogo.textContent);
}