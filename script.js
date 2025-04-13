const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');


taskInput.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    addTask();
  }
});

addTaskBtn.addEventListener('click', addTask);


function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;  

  const li = document.createElement('li');


  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', toggleTask);

  
  const span = document.createElement('span');
  span.textContent = text;

  
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑';
  deleteBtn.addEventListener('click', removeTask);

  
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  
  taskList.appendChild(li);  

  
  taskInput.value = "";
}


function toggleTask(event) {
  const li = event.target.parentElement;
  const checkbox = event.target;

  if (checkbox.checked) {
    li.classList.add('completed');  // 
  } else {
    li.classList.remove('completed');  // 
  }

  reorderTasks();  
}


function removeTask(event) {
  const li = event.target.parentElement;
  taskList.removeChild(li);
}


function reorderTasks() {
  const tasks = Array.from(taskList.children);  

  
  const completedTasks = tasks.filter(task => task.classList.contains('completed'));
  const incompleteTasks = tasks.filter(task => !task.classList.contains('completed'));

 
  taskList.innerHTML = '';
  incompleteTasks.forEach(task => taskList.appendChild(task)); 
  completedTasks.forEach(task => taskList.appendChild(task));  
}