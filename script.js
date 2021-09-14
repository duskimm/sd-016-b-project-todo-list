const list = document.querySelector('#lista-tarefas');

const addTaskButton = document.querySelector('#criar-tarefa');

const eraseAllButton = document.querySelector('#apaga-tudo');

const eraseCompletedTasks = document.querySelector('#remover-finalizados');

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

addTaskButton.addEventListener('click', addTaskToList);

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

function completeItem(event) {
  const item = event.target;

  if (item.classList.contains('completed')) {
    item.classList.remove('completed');
  } else item.classList.add('completed');
}

list.addEventListener('dblclick', completeItem);

function eraseAllTasks() {
  for (let i = 0; i < items.length; i += 0) {
    const currentTask = items[i];
    list.removeChild(currentTask);
  }
}

eraseAllButton.addEventListener('click', eraseAllTasks);

function removeCompletedTasks() {
  const selectedItem = document.getElementsByClassName('completed');

  for (let i = 0; i < selectedItem.length; i += 0) {
    const item = selectedItem[i];
    list.removeChild(item);
  }
}

eraseCompletedTasks.addEventListener('click', removeCompletedTasks);
