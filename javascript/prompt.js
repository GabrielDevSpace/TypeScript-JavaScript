let idade = prompt('digite sua Idade:')
let peso = prompt('digite seu Peso:')
let altura = prompt('digite sua Altura:')

if(!idade || !peso || !altura){
    var $valores = document.querySelector('.valores'),
    valoresEmBranco = 'Impossivel Calcular seu IMC, voce deixou algum campo em branco!';
    $valores.innerHTML = valoresEmBranco;

} else {
let calculoImc = peso / (altura * altura);
var imcValor = (calculoImc.toFixed(2))

    if(imcValor<16){
        imc_atual = "Magreza Grau III";
    } else if (imcValor >= 16 && imcValor <= 16.9 ){
        imc_atual = "Magreza Grau II";
    } else if (imcValor >= 17 && imcValor <= 18.4 ){
        imc_atual = "Magreza Grau I";
    } else if (imcValor >= 18.5 && imcValor <= 24.9 ){
        imc_atual = "Adequado";
    } else if (imcValor >= 25 && imcValor <= 29.9 ){
        imc_atual = "Pré-Obeso";
    } else if (imcValor >= 30 && imcValor <= 34.9 ){
        imc_atual = "Obesidade Grau I";
    } else if (imcValor >= 35 && imcValor <= 39.9 ){
        imc_atual = "Obesidade Grau II";
    } else if (imcValor >= 40 ){
        imc_atual = "Obesidade Grau III";
    } else {
        imc_atual = 0;
    }
    
    var $imc = document.querySelector('.imc'),
    imcValor = 'Com base nos Valores Informados seu IMC é: <b>'+(calculoImc.toFixed(2))+" | "+imc_atual+'</b>';
    $imc.innerHTML = imcValor;

    
    var $valores = document.querySelector('.valores'),
    // Novo valor HTML que será inserido
    valoresDigitados = 'Idade: '+idade+' Anos<br /> Peso: '+peso+' Kg<br /> Altura: '+altura+' m<br />';
    // Coloca a nova string(que é o HTML) no DOM
    $valores.innerHTML = valoresDigitados;
}