    /*
    var $paragrafo = document.querySelector('.paragrafo')
    var $div = document.querySelector('.div')
    var $footer = document.querySelector('.footer')
    var $section = document.querySelector('.section')

    valoresDigitados = 'Idade: '+idade+' Anos<br /> Peso: '+peso+' Kg<br /> Altura: '+altura+' m<br />';
    // Coloca a nova string(que é o HTML) no DOM
    $paragrafo.innerHTML = 'Frase 1';
    $div.innerHTML = 'Frase 2';
    $footer.innerHTML = 'Frase 3';
    $section.innerHTML = 'Frase 4';
    */
   // Criando um ARRAY de OBJETOS 
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container'); //Pega referencia para input de valores
const div = document.createElement('div'); //Cria um elemento HTML

for (let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i]; //Separa os elementos de um ARRAY de OBJETOS
    let tagCriada = document.createElement(tag) //Cria um elemento HTML com essa tag salva no ARRAY
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);

