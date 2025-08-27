function sortear() {
 let quantidade = document.getElementById('quantidade').value; // quantidade de números a sortear
 let de = document.getElementById('de').value; // valor mínimo
 let ate = document.getElementById('ate').value; // valor máximo
 ValidaValor(de, ate, quantidade);

 console.log(`Valores de entrada: Quantidade de numeros ${quantidade}, minimo ${de}, maximo ${ate}`); // valores de entrada anexados.

 numSortidos = []; //Criando array dos numeros sortiados.

 for(let i = 0; i < quantidade; i++){
   numSortidos.push(obterNumeroAleatorio(de, ate)); // Adicionando número sorteado ao array, e passando as informações de valores minimos, e maximos.
  while(numSortidos.indexOf(numSortidos[i]) != i){ // Verificando se o número já existe no array.
    numSortidos[i] = obterNumeroAleatorio(de, ate);
  }
 let texto = document.getElementById('resultado');
 texto.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numSortidos.join(', ')}</label>`;
 console.log(numSortidos); //Validando os numeros sorteados, e sua colocação no array.

 alteraBotao(); //habilita o botão de reiniciar ao gerar os números pela primeira vez.
}
}

function obterNumeroAleatorio(min, max){
  min = Math.ceil(min);// Arredondando para cima o valor mínimo
  max = Math.floor(max);// Arredondando para baixo o valor máximo

  return Math.floor(Math.random() * (max - min) + min);// Retornando número aleatório

}


function reiniciar(){
de.innerHTML ='';
ate.innerHTML ='';
quantidade.innerHTML ='';
resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
alteraBotao();
}

function alteraBotao(){
  let botao = document.getElementById('btn-reiniciar');
  if(botao.classList.contains('container__botao-desabilitado')){
    botao.classList.remove('container__botao-desabilitado')
    botao.classList.add('container__botao')
  }else{
    botao.classList.remove('container__botao')
    botao.classList.add('container__botao-desabilitado')
  }
}

function ValidaValor(de, ate, quantidade){
  valorMinimo = de;
  valorMaximo = ate;
  valorQuantidade = quantidade;
  if(valorQuantidade <= 0){
    alert('Valor invalido, digite um numero maior que zero');
    }else if (valorMinimo >= valorMaximo){
          alert('O valor inicial não pode ser maior que o valor final');
      return;
  }
}
