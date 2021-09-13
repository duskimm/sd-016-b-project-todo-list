const taskList = document.getElementById('lista-tarefas');

function appendTask(task, taskListSelector) {
  document.querySelector(taskListSelector).append(task);
}

function getTaskText() {
  const taskInput = document.querySelector('#texto-tarefa');
  const taskValue = taskInput.value;
  taskInput.value = '';
  return taskValue;
}

function selectTask(evt) {
  const taskSelected = evt.target;
  const parent = taskSelected.parentElement;
  Array.from(parent.children).forEach((task) => {
    if (taskSelected === task) {
      task.classList.toggle('selected');
    } else {
      task.classList.remove('selected');
    }
  });
}

function toggleCompletedTask(evt) {
  const taskSelected = evt.target;
  taskSelected.classList.toggle('completed');
}

function addTaskEventListeners(task) {
  task.addEventListener('click', selectTask);
  task.addEventListener('dblclick', toggleCompletedTask);
}

function createTask() {
  const newTask = document.createElement('li');
  newTask.innerText = getTaskText();
  addTaskEventListeners(newTask);
  appendTask(newTask, '#lista-tarefas');
}

function clearTaskList() {
  taskList.innerText = '';
}

function saveTasks() {
  window.localStorage.setItem('tasks', JSON.stringify(taskList.innerHTML));
}

function getTasks() {
  const tasks = JSON.parse(window.localStorage.getItem('tasks'));
  taskList.innerHTML = tasks;
  Array.from(taskList.children).forEach((task) => {
    addTaskEventListeners(task);
  });
}

function removeCompletedTask() {
  Array.from(taskList.children).forEach((task) => {
    if (task.classList.contains('completed')) task.remove();
  });
  saveTasks();
}

window.onload = () => {
  const createTaskButton = document.getElementById('criar-tarefa');
  createTaskButton.addEventListener('click', createTask);
  const clearTaskListButton = document.getElementById('apaga-tudo');
  clearTaskListButton.addEventListener('click', clearTaskList);
  const removeCompletedButton = document.getElementById('remover-finalizados');
  removeCompletedButton.addEventListener('click', removeCompletedTask);
  const saveTasksButton = document.getElementById('salvar-tarefas');
  saveTasksButton.addEventListener('click', saveTasks);
  getTasks();
};
