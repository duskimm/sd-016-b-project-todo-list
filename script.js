const orderedList = document.getElementById('lista-tarefas');
const inputTasks = document.getElementById('texto-tarefa');
const taskButton = document.getElementById('criar-tarefa');

function addTasks() {
	const inputValue = inputTasks.value;
	const createLi = document.createElement('li');
	createLi.innerHTML = inputValue;
	orderedList.appendChild(createLi);
	inputTasks.value = '';
}

taskButton.addEventListener('click', addTasks);

