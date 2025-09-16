
function carrinhoCompras() {}

function adicionar(){

    let quantidade = document.getElementById('quantidade');
    let produto = document.getElementById('produto').value;
    //recuperado informações do produto

    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    //dividido as informações do produto (valor do produto e nome do produto)

    console.log(produto, quantidade.value);
    console.log(valorUnitario, nomeProduto);
    //validando se os valores foram recuperados corretamente

    let preco = quantidade.value * valorUnitario;
    //recebe o valor do produto e multiplica pela quantidade adicionada.

    console.log(preco);
    //validnado se o calculo do valor do produto esta sendo calculado corretamente com a quantidade adicionada.
}

function limpar() {
    
}
