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

let listItens = document.getElementsByClassName('list-item');

// Função que seleciona a tarefa
function selectListItem(event) {
  if (event.target.classList.contains('list-item')) {
    event.target.classList.add('selected');
  }
}

document.addEventListener('click', selectListItem)