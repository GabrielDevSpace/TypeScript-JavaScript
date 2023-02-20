
function iniciarLaco() {

    var valorSpan = 5
    for (let i = 1; i <= 10; i++) {
       var calculo = 5 * valorSpan
       var valorSpan = calculo
       
       if(i==1){
        document.body.innerHTML += '<div>5 x 5 = "+5*5+"<br /></div>';
       }
        document.write("5 x "+valorSpan+ " = "+5*valorSpan+"<br />")
    
       }

      }
    
