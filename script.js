function addTask() {
  const taskInput = document.querySelector('#texto-tarefa');
  const taskList = document.querySelector('#lista-tarefas');
  const taskElement = document.createElement('li');

  taskElement.innerText = taskInput.value;
  taskElement.classList.add('tarefa');
  taskList.appendChild(taskElement);
  taskInput.value = '';
}

const addTaskButton = document.querySelector('#criar-tarefa');
addTaskButton.addEventListener('click', addTask);

function selectTask(event) {
  const selectedTask = document.querySelector('.selecionada');
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
