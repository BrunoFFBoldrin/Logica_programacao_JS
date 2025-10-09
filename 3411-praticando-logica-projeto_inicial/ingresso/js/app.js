function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);
    //receber elementos

    if(tipo.value =='pista'){
        comprarPista(quantidade);
    }
     console.log(`Quantidade: ${quantidade} ,Tipo ${tipo.value}`);
}

function comprarPista(qtd){
let ingresso = parseInt(document.getElementById('qtd-pista').textContent);
if(qtd > ingresso){
    alert('Quantidade indisponivel para ingresso pista');
}else{
    alert('Parabéns, seu ingresso esta garantido.');
    ingresso = ingresso - qtd;
    document.getElementById('qtd-pista').textContent = ingresso;
}
}

function comprarInferior(qtd){
let ingresso = document.getElementById('qtd-inferior');

}

function comprarSuperior(qtd){
let ingresso = document.getElementById('qtd-superior');
}