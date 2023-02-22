 const inputTask = document.querySelector(".input-task");
 const btnAdd = document.querySelector(".btn-add");
 const tasks = document.querySelector(".tasks");
 
 function addLi(){
    const li = document.createElement("li");
    return li;
 }  

 function addTask(inputText){
    const taskLi = addLi();
    taskLi.innerText = inputText;
    tasks.appendChild(taskLi)
    //console.log(inputText)
 }

btnAdd.addEventListener("click", function(){
    if (!inputTask.value) return;
    addTask(inputTask.value);
});