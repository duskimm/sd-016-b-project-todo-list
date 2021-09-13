const toDoList = document.querySelector('#lista-tarefas');

function addToList() {
  const doList = document.getElementById('lista-tarefas');
  const list = document.createElement('li');
  const input = document.getElementById('texto-tarefa');
  list.innerText = input.value;
  toDoList.appendChild(list);
  input.value = "";
}

document.getElementById('criar-tarefa').addEventListener('click', addToList);
