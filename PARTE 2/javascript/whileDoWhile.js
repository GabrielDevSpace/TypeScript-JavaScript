let loopSize = prompt('enter loop size:')
let loopWhile =document.querySelector('.loopWhile');
i = 0;
while ( i < loopSize) {
    i++
if (i === 50){
    loopWhile.innerHTML += '<br>Skipped This Test';
    continue;
} else if (i === 100){
    break; // limit 100 loops
}
loopWhile.innerHTML += '<br>Teste: ' + i;
}