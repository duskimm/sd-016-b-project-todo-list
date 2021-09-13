// Funcao para criar elementos fora do dom, recebe como parametros respectivamente o tipo do elemento, o texto, as classes, e o id, se passar '' como parametro ele nao adiciona o parametro em questao.
function newChild(type, text, classs, id) {
	const newChildItem = document.createElement(type);
	newChildItem.innerText = text;
	if (classs !== '') {
	  newChildItem.className = classs;
	}
	if (id !== '') {
	  newChildItem.id = id;
	}
	return newChildItem;
}

// Remove a class selected da todoList
function removeSelected(selectedTodo) {
	if (selectedTodo !== null) {
		selectedTodo.classList.remove('selected');
	}
};

document.querySelector('#criar-tarefa').addEventListener('click', () => {
	const inputText = document.querySelector('#texto-tarefa');
	const todoList = document.querySelector('#lista-tarefas');
	if (inputText !== '') {
		todoList.append(newChild('li', inputText.value, 'todo', ''));
		inputText.value = '';
	}
});

document.addEventListener('click', (event) => {
	if (event.target.classList.contains('todo')) {
		removeSelected(document.querySelector('.selected'));
		event.target.classList.add('selected');
	}
});

document.addEventListener('dblclick', (event) => {
	const todo = event.target;
	if (todo.classList.contains('todo')) {
		if (todo.classList.contains('completed')) {
			todo.classList.remove('completed');
		} else {
			todo.classList.add('completed');
		}
	}
});