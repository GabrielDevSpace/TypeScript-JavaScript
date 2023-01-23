

/*
Valores primitivos (imutaveis) - string, number, boolean, undefined, null
*/

//Ok posso mudar o valor de uam string
var nome = 'luiz';
nome = 'otavio';
//Acima basicamente estou criando uma nova string NOME por isso me permite alterar, estou alocando um novo valor em um novo local da memoria
console.log(nome);


//mas nao posso mudar sua estrutura
var nome = 'luiz';
nome[0] = 'R';
console.log(nome[0]+nome[1]+nome[2]+nome[3]);
//O retorno esperado seria Ruiz
//Mas como iumutavel nao posso alterar sua estrutura interna de uma string ja existente na momoria




/*
Referencia (mutaveis) - arrays, objetos, function
*/

var nome1 = ['l','u','i','z'];
console.log(nome1);
nome1[0] = 'r';
console.log(nome1);
//Acima estou conseguindo substituir um valor na memoria
//Valor repassado como referencia
nome2 = nome1[0]; 
console.log(nome2,nome1[1],nome1[2],nome1[3]);

//Otimo exemplo de valores por referencia é um cliente anexar uma pessoa referencia/avalista em sua compra

const cliente = {
    
    identificador: '041916',
    nome: 'Luiz',
    sobrenome: 'Otavio'

}

    avalista = cliente
const referencia = {
    nome: 'Maria',
    sobrenome: 'De Lourdes',
    avalistaDe: avalista.identificador
}
    console.log(referencia)
//Maria é uma cliente AVALISTA referenciada ao cliente Luiz