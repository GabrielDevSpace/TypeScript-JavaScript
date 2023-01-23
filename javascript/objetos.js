//Objeto

const pessoa1 = {
    nome: 'Gabriel',
    sobrenome: 'Pires',
    idade: '31',

// Quando uma função esta dentro de um OBJETO ela é um METODO que pode ser invocado posteriormente

fala (){
    console.log(`Meu nome é: '${this.nome}' e minha idade é: '${this.idade}`)
},

incrementaIDade (){
    pessoa1.idade++;
}

};


// Invocando metodo do objeto
pessoa1.incrementaIDade();
pessoa1.fala();