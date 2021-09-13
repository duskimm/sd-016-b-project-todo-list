const addTarefa = document.getElementById('criar-tarefa');

function addTarefaFunction() {
  const todoList = document.getElementById('lista-tarefas');

  const createLi = document.createElement('li');

  const textTodo = document.getElementById('texto-tarefa');

  todoList.appendChild(createLi);

  createLi.innerText = textTodo.value;

  textTodo.value = '';
}

addTarefa.addEventListener('click', addTarefaFunction);
