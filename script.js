const list = document.getElementById('lista-tarefas');

const button = document.querySelector('#criar-tarefa');

function addTaskToList(event) {
  event.preventDefault();

  const taskInput = document.getElementById('texto-tarefa');
  const taskString = taskInput.value;
  const newTask = document.createElement('li');

  newTask.className = 'listItem';

  newTask.innerText = taskString;
  list.appendChild(newTask);
  taskInput.value = '';
}

button.addEventListener('click', addTaskToList);

function selectItem(event) {
  const selectedTask = event.target;

  selectedTask.classList.add('selected');
}

list.addEventListener('click', selectItem);
