let taskButton = document.getElementById('criar-tarefa');
let inputTask = document.getElementById('texto-tarefa');

// Função que adiciona uma nova tarefa à lista
function addNewTask() {
  let newListItem = document.createElement('li');
  newListItem.className = 'list-item';
  newListItem.innerHTML = inputTask.value;
  document.getElementById('lista-tarefas').appendChild(newListItem);

  inputTask.value = '';
}

taskButton.addEventListener('click', addNewTask);

// Função que seleciona a tarefa
function selectListItem(event) {
  let listItens = document.getElementsByClassName('list-item');
  for (let index = 0; index < listItens.length; index += 1) {
    listItens[index].classList.remove('selected');
  }

  if (event.target.classList.contains('list-item')) {
    event.target.classList.add('selected');
  }
}

document.addEventListener('click', selectListItem);

// Função que marca a tarefa como completa

function completedTask(event) {
  let listItens = document.getElementsByClassName('list-item');

  if (event.target.classList.contains('list-item')) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
}

document.addEventListener('dblclick', completedTask);
