function sortear() {
 let quantidade = document.getElementById('quantidade').value; // quantidade de números a sortear
 let de = document.getElementById('de').value; // valor mínimo
 let ate = document.getElementById('ate').value; // valor máximo

 console.log(quantidade, de, ate); // valores de entrada anexados.

 numSortidos = []; //Criando array dos numeros sortiados.

 for(let i = 0; i < quantidade; i++){
   numSortidos.push(obterNumeroAleatorio(de, ate)); // Adicionando número sorteado ao array, e passando as informações de valores minimos, e maximos.

 }

 console.log(numSortidos); //Validando os numeros sorteados, e sua colocação no array.
}

function obterNumeroAleatorio(min, max){
  min = Math.ceil(min);// Arredondando para cima o valor mínimo
  max = Math.floor(max);// Arredondando para baixo o valor máximo

  return Math.floor(Math.random() * (max - min) + min);// Retornando número aleatório

}