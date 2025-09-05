//Crie um programa com uma função que receba três números como argumentos e os retorne em ordem crescente. Exiba os números ordenados.


function organizarNumeros(){
    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);
    let num3 = parseFloat(document.getElementById('numero3').value);


    console.log(num1, num2, num3);
    if(num1 < num2 && num1 < num3){
        if(num2 < num3){
            alert(`Ordem crescente: ${num1}, ${num2}, ${num3}`);
        }else{
            alert(`Ordem crescente: ${num1}, ${num3}, ${num2}`);
        }if(num2 < num1 && num2 < num3){
            if(num1 < num3){
                alert(`Ordem crescente: ${num2}, ${num1}, ${num3}`);
            }else{
                alert(`Ordem crescente: ${num2}, ${num3}, ${num1}`);
            }if(num3 < num1 && num3 < num2){
                if(num1 < num2){
                    alert(`Ordem crescente: ${num3}, ${num1}, ${num2}`);
                }else{
                    alert(`Ordem crescente: ${num3}, ${num2}, ${num1}`);
                }

            }
        }

    }   
}

function checaduplicada(){
    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);
    let num3 = parseFloat(document.getElementById('numero3').value);

    if(num1 === num2 || num1 === num3 || num2 === num3) {
        alert("Números duplicados encontrados!");
        return
    }else{
        organizarNumeros();
    }
}