function comprimentar(horario) {
    console.log(horario)
    const hora = horario;
    var $cumprimento = document.querySelector('#cumprimento')
    var mensagem;
    if (hora > 1 && hora < 12){
        mensagem = 'Bom dia!;'
        $cumprimento.innerHTML = mensagem
    } else if (hora >= 12 && hora < 18) {
        mensagem = 'Boa Tarde;'
        $cumprimento.innerHTML = mensagem
    } else if (hora >= 18 && hora < 1) {
        mensagem = 'Boa Noite;'
        $cumprimento.innerHTML = mensagem
    } else {
        mensagem = 'Error'
        $cumprimento.innerHTML = mensagem
    }
}