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

document.addEventListener("click", function(e){
   const element = e.target;
   if(element.classList.contains('delete')){
      element.parentElement.remove();
      saveTask();
   }
})

function addTask(inputText){
   const taskLi = addLi();
   taskLi.innerText = inputText;
   tasks.appendChild(taskLi)
      cleanInput();
      deleteButton(taskLi);
      saveTask();
};

function addLi(){
   const li = document.createElement("li");
   return li;
};

function cleanInput(){
   inputTask.value = "";
   inputTask.focus();
}

function deleteButton (taskli){
   taskli.innerText += " ";
   const button = document.createElement('button');
   button.setAttribute("class", "delete")
   button.innerText = "Delete";
   taskli.appendChild(button);
}

   function saveTask(){
      const liTasks = tasks.querySelectorAll("li");
      const taskslist = [];

      for (let task of liTasks){
         let textTask = task.innerText;
         textTask = textTask.replace("Delete", "").trim();
         taskslist.push(textTask);
      }
      const tasksjSON = JSON.stringify(taskslist)
      localStorage.setItem("tasks",tasksjSON)
      console.log(tasksjSON)
   }

      function addSavedtasks(){
         const tasks = localStorage.getItem('tasks');
         //Convertendo tarefas para um ARRAY
         const tasksList = JSON.parse(tasks);

         for (let task of tasksList){
            addTask(task);
         }

         console.log(tasks)
      }

      addSavedtasks();