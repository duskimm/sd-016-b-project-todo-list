const list = document.getElementById('lista-tarefas');

const button = document.querySelector('#criar-tarefa');

const items = document.getElementsByTagName('li');

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
  for (let i = 0; i < items.length; i += 1) {
    const currentItem = items[i];
    if (currentItem.classList.contains('selected')) {
      currentItem.classList.remove('selected');
    }
  }

  const selectedTask = event.target;

  selectedTask.classList.add('selected');
}

list.addEventListener('click', selectItem);
