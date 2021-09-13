//criar uma li
const todoText = document.getElementById('texto-tarefa');
const createButton = document.getElementById('criar-tarefa');
const todoList = document.querySelector('#lista-tarefas')

function createTodo() {
  const createLi = document.createElement('li');
	let text = todoText.value;
	todoList.appendChild(createLi).innerText = text;

}

createButton.addEventListener('click', createTodo);