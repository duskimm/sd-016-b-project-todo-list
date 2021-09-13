const taskList = document.querySelector('#lista-tarefas');

function addTask() {
  const taskInput = document.querySelector('#texto-tarefa');
  const taskElement = document.createElement('li');

  taskElement.innerText = taskInput.value;
  taskElement.classList.add('tarefa');
  taskList.appendChild(taskElement);
  taskInput.value = '';
}

const addTaskButton = document.querySelector('#criar-tarefa');
addTaskButton.addEventListener('click', addTask);

function getSelectedTask() {
  return document.querySelector('.selecionada');
}

function selectTask(event) {
  const selectedTask = getSelectedTask();
  if (selectedTask !== null) {
    selectedTask.classList.remove('selecionada');
  }
  event.target.classList.add('selecionada');
}

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('tarefa')) {
    selectTask(event);
  }
}, false);

function completeTask(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

document.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('tarefa')) {
    completeTask(event);
  }
}, false);

function clearList() {
  taskList.innerHTML = '';
}

const clearListButton = document.querySelector('#apaga-tudo');
clearListButton.addEventListener('click', clearList);

function removeCompletedTasks() {
  const completedTasks = document.querySelectorAll('.completed');
  if (completedTasks !== null) {
    for (let index = 0; index < completedTasks.length; index += 1) {
      completedTasks[index].remove();
    }
  }
}

const removeCompletedTasksButton = document.querySelector('#remover-finalizados');
removeCompletedTasksButton.addEventListener('click', removeCompletedTasks);

function saveList() {
  const tasks = document.querySelectorAll('.tarefa');
  const tasksInfo = [];
  if (tasks !== null) {
    for (let index = 0; index < tasks.length; index += 1) {
      tasksInfo.push({
        text: tasks[index].innerText,
        classes: tasks[index].className,
      });
    }
  }
  localStorage.setItem('tasksInfo', JSON.stringify(tasksInfo));
}

const saveListButton = document.querySelector('#salvar-tarefas');
saveListButton.addEventListener('click', saveList);

function initiateList() {
  const tasksInfo = JSON.parse(localStorage.getItem('tasksInfo'));
  if (tasksInfo !== null) {
    for (let index = 0; index < tasksInfo.length; index += 1) {
      const task = document.createElement('li');
      task.innerText = tasksInfo[index].text;
      task.className = tasksInfo[index].classes;
      taskList.appendChild(task);
    }
  }
}

window.onload = initiateList;

function switchPosition(task1, task2) {
  const firstTask = task1;
  const secondTask = task2;
  const tempTask = {
    text: firstTask.innerText,
    classes: firstTask.className,
  };

  firstTask.innerText = secondTask.innerText;
  firstTask.className = secondTask.className;
  secondTask.innerText = tempTask.text;
  secondTask.className = tempTask.classes;
}

function moveTaskUp() {
  const selectedTask = getSelectedTask();
  if (selectedTask !== null && selectedTask.previousElementSibling !== null) {
    switchPosition(selectedTask, selectedTask.previousElementSibling);
  }
}

function moveTaskDown() {
  const selectedTask = getSelectedTask();
  if (selectedTask !== null && selectedTask.nextElementSibling !== null) {
    switchPosition(selectedTask, selectedTask.nextElementSibling);
  }
}

const moveUpButton = document.querySelector('#mover-cima');
moveUpButton.addEventListener('click', moveTaskUp);

const moveDownButton = document.querySelector('#mover-baixo');
moveDownButton.addEventListener('click', moveTaskDown);

function removeSelectedTask() {
  const selectedTask = getSelectedTask();
  if (selectedTask !== null) {
    selectedTask.remove();
  }
}

const removeSelectedTaskButton = document.querySelector('#remover-selecionado');
removeSelectedTaskButton.addEventListener('click', removeSelectedTask);
