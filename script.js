$(document).ready(function(){
    //Pegando os edits
    $(".dinheiro").maskMoney({decimal:',', thousands:'.'});
    $("#percent").maskMoney({precision:4,decimal:',', thousands:'.'});
});

//Logica para modificar os campos

let comboModelo = document.querySelector("#calculo").value;

//Verificar a cada mudança do comboBox qual o valor

//Dentro da verificação, entender o que ele precisa liberar e colocar a cor para o usuario;

//Bloquear e colocar cor diferente no campo que não precisa digitar

//Preencher o campo com os valores referente ao combobox

//Tirar a cor dos campos após 10 segundos da modificação

