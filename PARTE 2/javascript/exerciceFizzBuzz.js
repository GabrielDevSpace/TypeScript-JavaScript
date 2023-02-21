function generate(){
    const numberSpan = document.querySelector("#number");
    const conditions = document.querySelector(".conditions");

    const number = Math.floor(Math.random() * 100) + 1;
    let result = 0;
    let fizz = Number.isInteger(number / 3);
    let buzz = Number.isInteger(number / 5);

    if(fizz === true && buzz === true){
        result="FizzBuzz";
    } else if (fizz === true && buzz === false){
        result="Fizz";
    } else if (fizz === false && buzz === true){
        result="Buzz";
    } else {
        result= number;
    }

    numberSpan.innerHTML = `<b>Generated Number: </b>${number}`;
    conditions.innerHTML = `<b>Fizz: </b>${fizz} | ${number} / 3 = ${number / 3}<br><b>Buzz: </b>${buzz} | ${number} / 5 = ${number / 5}<br><b>General Result:</b> ${result}`;
    console.log(result, "number: "+number, "Fizz: "+number / 3, "Buzz: "+number / 5)

}
