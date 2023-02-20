function analisar(){



    for(var i = 0; i < 1000; i++){
        //resultados dos ultimos 14 anos de mega da virada
        //identificando numero maximo das fileiras de numeros
        var primeiraCasa = Math.max(10,2,3,14,20,1,2,5,3,5,3,17,12,4)
        var segundaCasa = Math.max(27,10,4,32,30,5,18,11,6,10,35,20,15,5)
        var terceiraCasa = Math.max(40,34,29,33,36,11,31,22,10,12,38,22,23,10)
        var quartaCasa = Math.max(46,37,36,36,38,16,42,24,17,18,40,35,32,34)
        var quintaCasa = Math.max(49,43,45,41,47,20,51,51,34,25,57,41,33,58)
        var sextaCasa = Math.max(58,50,55,52,53,56,56,53,37,33,58,42,46,59)
        
        //identificando numero min das fileiras de numeros
        var primeiraCasaMin = Math.min(10,2,3,14,20,1,2,5,3,5,3,17,12,4)
        var segundaCasaMin = Math.min(27,10,4,32,30,5,18,11,6,10,35,20,15,5)
        var terceiraCasaMin = Math.min(40,34,29,33,36,11,31,22,10,12,38,22,23,10)
        var quartaCasaMin = Math.min(46,37,36,36,38,16,42,24,17,18,40,35,32,34)
        var quintaCasaMin = Math.min(49,43,45,41,47,20,51,51,34,25,57,41,33,58)
        var sextaCasaMin = Math.min(58,50,55,52,53,56,56,53,37,33,58,42,46,59)

        /*
        exibir numero min e max de cada fileira de numeros
        if(i==1){
        document.write(`${primeiraCasa},${primeiraCasaMin}/${segundaCasa},${segundaCasaMin}/${terceiraCasa},${terceiraCasaMin}/${quartaCasa},${quartaCasaMin}/${quintaCasa},${quintaCasaMin}/${sextaCasa},${sextaCasaMin}`)
        }
        */
        var numeroAleatorio1 = Math.floor(Math.random() * (primeiraCasa - primeiraCasaMin + 1) + primeiraCasaMin)
        var numeroAleatorio2 = Math.floor(Math.random() * (segundaCasa - segundaCasaMin + 1) + segundaCasaMin)
        var numeroAleatorio3 = Math.floor(Math.random() * (terceiraCasa - terceiraCasaMin + 1) + terceiraCasaMin)
        var numeroAleatorio4 = Math.floor(Math.random() * (quartaCasa - quartaCasaMin + 1) + quartaCasaMin)
        var numeroAleatorio5 = Math.floor(Math.random() * (quintaCasa - quintaCasaMin + 1) + quintaCasaMin)
        var numeroAleatorio6 = Math.floor(Math.random() * (sextaCasa - sextaCasaMin + 1) + sextaCasaMin)    
        
        var numeros = [numeroAleatorio1,numeroAleatorio2,numeroAleatorio3,numeroAleatorio4,numeroAleatorio5,numeroAleatorio6]

        numeros.sort(function(a, b){return a - b});

        function hasDuplicates(numeros) {
            return new Set(numeros).size !== numeros.length;
        }
        
        if (hasDuplicates(numeros)) {
            //document.getElementById( 'mega_aleatorio' ).innerHTML += `<p>DUPLICADO</p>`
        }
        else {
            // Na tentativa de o script acertar os ultimos numeros da mega da virada 4-5-10-34-58-5
            if (numeros == [4,5,10,34,58,59] ){
                alert(`ITS SHOW TIME: ${numeros}`)
            } 
            document.getElementById( 'mega_aleatorio' ).innerHTML += `<p>${i} - ${numeros}</p>`       
        }   
    }  
}
