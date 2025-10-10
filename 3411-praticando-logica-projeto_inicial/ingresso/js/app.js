function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);
    //receber elementos

    if(tipo.value =='pista'){
        comprarPista(quantidade);
    }else if(tipo.value =='inferior'){
        comprarInferior(quantidade);
    }else{
        comprarSuperior(quantidade);
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
let ingresso = parseInt(document.getElementById('qtd-inferior').textContent);
if(qtd > ingresso){
    alert('Quantidade indisponivel para ingresso Inferior');
}else{
    alert('Parabéns, seu ingresso esta garantido');
    ingresso = ingresso - qtd;
    document.getElementById('qtd-inferior').textContent = ingresso;
    
}
}

function comprarSuperior(qtd){
let ingresso = parseInt(document.getElementById('qtd-superior').textContent);
if(qtd > ingresso){
    alert('Quantidade indisponivel para ingresso Inferior');
}else{
    alert('Parabéns, seu ingresso esta garantido');
    ingresso = ingresso - qtd;
    document.getElementById('qtd-superior').textContent = ingresso;
}
}