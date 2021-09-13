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
    arrayClassList[index].classList.remove('item-selected');
  }
}

function selectedItem(event) {
  checkClass();
  const clickItem = event.target;
  clickItem.classList.add('item-selected');
}

function todoComplete(event) {
  const doubleClickItem = event.target.classList;

  doubleClickItem.toggle('completed');
}

addTarefa.addEventListener('click', addTarefaFunction);

todoList.addEventListener('click', selectedItem);

todoList.addEventListener('dblclick', todoComplete);
