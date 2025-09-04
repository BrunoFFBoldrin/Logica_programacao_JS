//Crie um programa com uma função que receba três números como argumentos e os retorne em ordem crescente. Exiba os números ordenados.


function organizarNumeros(){
    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);
    let num3 = parseFloat(document.getElementById('numero3').value);


    console.log(num1, num2, num3);

    
    if(num1 > num2 && num1 > num3) {
        if(num2 > num3) {
            alert(`A ordem de maior para menor é: ${num1}, ${num2}, ${num3}`);
        } else if(num3 > num2) {
            alert(`A ordem de maior para menor é: ${num1}, ${num3}, ${num2}`);

        } else if(num2 > num1 && num2 > num3) {
            if(num1 > num3) {
                alert(`A ordem de maior para menor é: ${num2}, ${num1}, ${num3}`);
            } else if(num3 > num1) {
                alert(`A ordem de maior para menor é: ${num2}, ${num3}, ${num1}`);

            }
        } else if(num3 > num1 && num3 > num2) {
            if(num1 > num2) {
                alert(`A ordem de maior para menor é: ${num3}, ${num1}, ${num2}`);
            } else if(num2 > num1) {
                alert(`A ordem de maior para menor é: ${num3}, ${num2}, ${num1}`);
            } else {
                alert("Cheque os numeros novamente");
            }
        }
    
    }
}