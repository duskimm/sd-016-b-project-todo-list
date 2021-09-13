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
      task.classList.add('selected');
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

function moveTaskUp() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask === null) return;
  const parent = selectedTask.parentElement;
  if (parent.firstElementChild === selectedTask) return;
  for (let i = 0; i < parent.childElementCount; i += 1) {
    if (parent.children.item(i) === selectedTask) {
      const taskToChangeInnerHTML = parent.children.item(i - 1).innerHTML;
      const taskToChangeClassList = parent.children.item(i - 1).classList.value;
      parent.children.item(i - 1).innerHTML = selectedTask.innerHTML;
      parent.children.item(i - 1).classList = selectedTask.classList;
      parent.children.item(i).innerHTML = taskToChangeInnerHTML;
      parent.children.item(i).classList = taskToChangeClassList;
    }
  }
}
function moveTaskDown() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask === null) return;
  const parent = selectedTask.parentElement;
  if (parent.lastElementChild === selectedTask) return;
  for (let i = 0; i < parent.childElementCount; i += 1) {
    if (parent.children.item(i) === selectedTask) {
      const taskToChangeInnerHTML = parent.children.item(i + 1).innerHTML;
      const taskToChangeClassList = parent.children.item(i + 1).classList.value;
      parent.children.item(i + 1).innerHTML = selectedTask.innerHTML;
      parent.children.item(i + 1).classList = selectedTask.classList;
      parent.children.item(i).innerHTML = taskToChangeInnerHTML;
      parent.children.item(i).classList = taskToChangeClassList;
    }
  }
}

function removeSelectedTask() {
  document.querySelector('.selected').remove();
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
  const moveTaskUpButton = document.getElementById('mover-cima');
  const moveTaskDownButton = document.getElementById('mover-baixo');
  moveTaskUpButton.addEventListener('click', moveTaskUp);
  moveTaskDownButton.addEventListener('click', moveTaskDown);
  const removeSelectedTaskButton = document.getElementById('remover-selecionado');
  removeSelectedTaskButton.addEventListener('click', removeSelectedTask);
  getTasks();
};
