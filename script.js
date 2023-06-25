var tasks = [];

function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");
  
  if (taskInput.value !== "") {
    var task = {
      text: taskInput.value,
      completed: false
    };
    
    tasks.push(task);
    renderTasks();
    taskInput.value = "";
  }
}

function renderTasks() {
  var taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  
  tasks.forEach(function(task, index) {
    var listItem = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", function() {
      toggleTaskCompletion(index);
    });
    
    var taskText = document.createElement("span");
    taskText.innerText = task.text;
    
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Excluir";
    deleteButton.addEventListener("click", function() {
      deleteTask(index);
    });
    
    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);
    
    if (task.completed) {
      listItem.classList.add("completed");
    }
    
    taskList.appendChild(listItem);
  });
}

function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
