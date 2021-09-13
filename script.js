let taskButton = document.getElementById('criar-tarefa');
let inputTask = document.getElementById('texto-tarefa');

function addNewTask() {
  let newListItem = document.createElement('li');
  newListItem.innerHTML = inputTask.value;
  document.getElementById('lista-tarefas').appendChild(newListItem);

  inputTask.value = '';
}

taskButton.addEventListener('click', addNewTask);