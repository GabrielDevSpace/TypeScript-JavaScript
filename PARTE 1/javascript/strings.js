

var texto1 = document.querySelector('.texto1').innerHTML = "Um texto qualquer"
var texto2 = ", para exemplificar a manipulação de strings com javascript."
var texto2Concatenado = texto1+texto2
var substituirPalavra = texto2Concatenado.replace('qualquer', 'simples')

function concatenar(){
    document.querySelector('.texto2').innerHTML = texto2Concatenado
}

function substituir(){
    document.querySelector('.texto3').innerHTML = substituirPalavra
}

function contar(){
    let contadorLetraA = 0;
    let quantidadeCaracteres = texto2Concatenado.length

    for(i = 0; i < quantidadeCaracteres; i++){

        if(texto2Concatenado[i] == 'a'){
            contadorLetraA++
        } else {
            contadorLetraA = contadorLetraA
        }
    }
    document.querySelector('.texto4').innerHTML = `<span> O texto acima contem: </span>${contadorLetraA} letras 'a'.`
}

