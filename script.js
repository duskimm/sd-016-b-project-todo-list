const addTarefa = document.getElementById('criar-tarefa');

const todoList = document.getElementById('lista-tarefas');

function addTarefaFunction() {
  const createLi = document.createElement('li');

  const textTodo = document.getElementById('texto-tarefa');

  todoList.appendChild(createLi);

  createLi.innerText = textTodo.value;

  createLi.classList.add('item-list');

  textTodo.value = '';
}

function checkClass() {
  const arrayClassList = document.getElementsByClassName('item-selected');
  for (let index = 0; index < arrayClassList.length; index += 1) {
    arrayClassList[index].className = 'item-list';
  }
}

function selectedItem(event) {
  checkClass();
  const clickItem = event.target;
  clickItem.classList.add('item-selected');
}

addTarefa.addEventListener('click', addTarefaFunction);

todoList.addEventListener('click', selectedItem);
