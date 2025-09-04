function verificarPalindromo() {
    let palavra = document.getElementById("palavra").value;
    console.log(palavra);
    let separa = palavra.split("");
    let inverte = separa.reverse();
    let junta = inverte.join("");

    if(palavra == junta){
        alert(`A palavra ${palavra} é um palíndromo!`);
    }
    else{
        alert(`A palavra ${palavra} não é um palíndromo!`);
    }
}