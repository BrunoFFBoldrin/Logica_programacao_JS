function recebeValores(){
   let nome = document.getElementById('campoNome').value;
   console.log(nome);
   let nomeCompleto = nome.split(" ");
   console.log(nomeCompleto);

   let idade = document.getElementById('campoIdade').value;
   console.log(idade)
   let dataNascimento = idade.split("/");
   console.log(dataNascimento);


   let dia = dataNascimento[0];
   let mes = dataNascimento[1];
   let ano = dataNascimento[2];

   let ChecaIdade = ValidaIdade(dia, mes, ano);
   console.log(ChecaIdade);

   document.getElementById('mostraNome').textContent = `Nome: ${nomeCompleto[0]}  Sobrenome: ${nomeCompleto[1]}`;
   document.getElementById('mostraIdade').textContent = `Data Nascimento: ${ChecaIdade[0]}/${ChecaIdade[1]}/${ChecaIdade[2]}`;
   


}

function ValidaIdade(dia, mes, ano){
   let validaSaida = false;

   while(!validaSaida){
   while(dia > 31 || dia <= 0){
    dia = prompt('Dia de nascimento invalido. Digite uma data valida.');
   }while(mes > 12 || mes <= 0){
    mes = prompt("Mês invalido. Digite uma data valida." );
   }while(ano > 2025 || ano <= 1900){
    ano = prompt('Ano invalido, Digite uma data valida');
   }

    validaSaida = true;
   }
   return [dia, mes, ano];
}