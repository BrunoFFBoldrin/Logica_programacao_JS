
let totalgeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';


function carrinhoCompras(quantidade,produto,preco) {
    let carrinho = document.getElementById('lista-produtos')
    carrinho.innerHTML =carrinho.innerHTML +`      <section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">R$${preco}</span>
        </section>
      </section>`
    let precoTotal = document.getElementById('valor-total')
    totalgeral = totalgeral + preco;
    precoTotal.textContent = `R$ ${totalgeral}`
    
}

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

    carrinhoCompras(quantidade.value, produto, preco);
}

function limpar() {
    
}
