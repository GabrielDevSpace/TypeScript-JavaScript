 const inputTask = document.querySelector(".input-task");
 const btnAdd = document.querySelector(".btn-add");
 const tasks = document.querySelector(".tasks");

// Function checks if inputTask null value does not add button addtask
btnAdd.addEventListener("click", function(){
   if (!inputTask.value) return;
   addTask(inputTask.value);
});

inputTask.addEventListener("keypress", function(e){
   if(e.keyCode === 13){
      if (!inputTask.value) return;
      addTask(inputTask.value);
   }
});

function addTask(inputText){
   const taskLi = addLi();
   taskLi.innerText = inputText;
   tasks.appendChild(taskLi)
   inputTask.value = '';
};

function addLi(){
   const li = document.createElement("li");
   return li;
};