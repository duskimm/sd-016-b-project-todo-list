const createTask = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const task = document.getElementsByClassName('tarefa');
const cleanAll = document.getElementById('apaga-tudo');

function deselectAllTasks() {
  for (let index = 0; index < task.length; index += 1) {
    if (task[index].classList.contains('selected') === true) {
      task[index].classList.toggle('selected');
    }
  }
}

function completeTask(listItem) {
  listItem.addEventListener('dblclick', () => {
    listItem.classList.toggle('completed');
  });
  return true;
}

function selectTask() {
  for (let index = 0; index < task.length; index += 1) {
    task[index].addEventListener('click', () => {
      deselectAllTasks();
      task[index].classList.toggle('selected');
    });
  }
}

function checkTask(newTask) {
  if (completeTask(newTask) !== true) {
    completeTask(newTask);
  }
}

function addTask() {
  createTask.addEventListener('click', () => {
    const newTask = document.createElement('li');
    newTask.innerHTML = input.value;
    newTask.classList.toggle('tarefa');
    taskList.appendChild(newTask);
    input.value = '';
    checkTask(newTask);
    selectTask();
  });
}

function cleanTasks() {
  cleanAll.addEventListener('click', () => {
    taskList.innerHTML = '';
  });
}

window.onload = () => {
  addTask();
  cleanTasks();
};
