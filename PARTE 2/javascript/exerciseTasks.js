 const inputTask = document.querySelector(".input-task");
 const btnAdd = document.querySelector(".btn-add");
 const tasks = document.querySelector(".tasks");

// Function checks if inputTask null value does not add button addtask
btnAdd.addEventListener("click", function(){
   if (!inputTask.value) return;
   addTask(inputTask.value);
});

// Function to submit form with enter button 
inputTask.addEventListener("keypress", function(e){
   if(e.keyCode === 13){
      if (!inputTask.value) return;
      addTask(inputTask.value);
   }
});

// Function to add delete button
document.addEventListener("click", function(e){
   const element = e.target;
   if(element.classList.contains('delete')){
      element.parentElement.remove();
      saveTask();
   }
})

// Function to add the task to the list
function addTask(inputText){
   const taskLi = addLi();
   taskLi.innerText = inputText;
   tasks.appendChild(taskLi)
      cleanInput();
      deleteButton(taskLi);
      saveTask();
};

// Function to add the Li element
function addLi(){
   const li = document.createElement("li");
   return li;
};

// Function to clear input after de submission
function cleanInput(){
   inputTask.value = "";
   inputTask.focus();
}

// Function to add a delete button
function deleteButton (taskli){
   taskli.innerText += " ";
   const button = document.createElement('button');
   button.setAttribute("class", "delete")
   button.innerText = "Delete";
   taskli.appendChild(button);
}

// Function to save task list in a json file conveting it to a string
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

// Function to load json localstorage and convert to array
function addSavedtasks(){
   const tasks = localStorage.getItem('tasks');
   const tasksList = JSON.parse(tasks);

   for (let task of tasksList){
      addTask(task);
   }

   console.log(tasks)
}

   addSavedtasks();