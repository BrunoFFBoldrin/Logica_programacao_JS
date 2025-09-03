let dadosanimal = recebeDados();
let pontuacao = calculoPontuacao(dadosanimal);
let resultado = calculaChanceAdocao(pontuacao);

alert("A chance de adoção é: " + resultado);

function recebeDados(){
    let pesoAnimal = parseFloat(prompt("Qual o peso do animal?"));
    console.log(pesoAnimal);
    let idadeAnimal = parseInt(prompt("Qual a idade do animal?"));
    console.log(idadeAnimal);
    return [pesoAnimal, idadeAnimal];   
}

function calculoPontuacao(dadosanimal) {
    let pontuacao = 10;
    let peso = dadosanimal[0];
    let idade = dadosanimal[1];
    //regras: Peso -- <10kg - 2pontos; <20kg - 4pontos;
    if (peso > 20) {
        pontuacao -= 4;
    }else if (peso > 10) {
        pontuacao -= 2;
    }
    //regras: Idade -- > 8anos - 2pontos; >14anos - 4pontos;
    if (idade > 14) {
        pontuacao -= 4;
    }else if (idade > 8) {
        pontuacao -= 2;
    }
    return pontuacao;
}

function calculaChanceAdocao(pontuacao) {
    if (pontuacao > 7) {
        return "Alta";
    } else if (pontuacao >= 5) {
        return "Média";
    } else {
        return "Baixa";
    }
}