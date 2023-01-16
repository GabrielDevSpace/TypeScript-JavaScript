/* Metodo LOG dentro do objeto CONSOLE */
/* Ponto e virgula OPCIONAL */

// Comentario de linha 
/* 
Comentario 
de
Bloco 
*/

var teste = 'Este é um teste!';
console.log(teste);

function capturar () {
var input = document.querySelector("#tipo_variavel");
var texto = input.value;

if (texto=="VAR" || texto=="var") {
    var txt = "A variavel: "+texto+" - É uma Variavel GLOBAL pode ser utilizada fora do bloco em que nasceu.";
    alert(txt);

} else if (texto=="LET" || texto=="let") {
    var txt = `A variavel: ${texto} - É uma Variavel de BLOCO onde NÂO pode ser utilizada fora do bloco em que nasceu.`;
    alert(txt);

} else {
    alert("Experimente consultar apenas por VAR ou LET.");
}
}

/* let ou var

LET têm escopo de bloco, instrução ou expressão
EX: variável dentro de um if, ela deve ser usada fora deste bloco de if?
Se sim usasse VAR se NAO usasse LET.

VAR têm escopo global ou escopo de função.

*/