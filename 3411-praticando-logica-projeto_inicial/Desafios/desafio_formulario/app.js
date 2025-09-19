function capturarValores(){
    let nome = document.getElementById('campoNome').value;
    let idade = document.getElementById('campoIdade').value;
    
    console.log(idade, nome);
    let resultado = checaValores(nome, idade)

    nome = resultado.nome;
    idade = resultado.idade

    document.getElementById('mostraNome').textContent = `Nome: ${nome}; Idade: ${idade}`;
    document.getElementById('campoNome').value = nome;
    document.getElementById('campoIdade').value = idade;
    console.log(idade, nome);
}

function checaValores(nome, idade){
    let condicaoSaida = false;
    while(!condicaoSaida){
        while(!nome){
        nome = prompt('O campo nome não pode estar vazio. Informe o nome');
        console.log(nome, idade);
        }
        while(idade <= 0 || idade > 120 || isNaN(idade)){
        idade = prompt('O campo idade é invalido. Digite outra valor.');
        console.log(nome, idade);
        }
    condicaoSaida = true;
    return {nome, idade};
    }
    
}