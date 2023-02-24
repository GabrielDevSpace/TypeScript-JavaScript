const parentUl = document.querySelector('#parentlist');

function newLi(){
    var newChildLi = document.createElement("li");
    return newChildLi;
}
    
function addLi(i) {
    const addLi = newLi();
    addLi.innerText += i + " Tag <li> adicionada por appendChild";
    parentUl.appendChild(addLi)
}

function rangeLi() { 
    for (let i = 1 ; i <= 10; i++){
        console.log(i)
        addLi(i)
    }
}

window.onload = function () { 
    rangeLi();
}


