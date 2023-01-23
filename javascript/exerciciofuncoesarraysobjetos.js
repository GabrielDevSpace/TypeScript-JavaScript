
    var pessoas = [] ;

function adicionar(){

    const form = document.querySelector('.form')

function recebeEventoForm (evento){

    var pessoa = { 
        nome:  document.querySelector('#nome').value,
        peso: document.querySelector('#peso').value,
        altura: document.querySelector('#altura').value,
    }   

    pessoas.push(pessoa)
    console.log(pessoas)

    var $pessoaTexto = document.querySelector('#pessoas')
    pessoaRetornoTexto = `teste`
    $pessoaTexto.innerHTML = pessoaRetornoTexto

}

    form.addEventListener('submit', recebeEventoForm);
    //addEventListener adiciona um monitoramento de eventos no meu formulario e caso true recebe a função recebeEventoForm

}
   