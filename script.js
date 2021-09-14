//criar uma li
const todoText = document.getElementById('texto-tarefa');
const createButton = document.getElementById('criar-tarefa');
const todoList = document.querySelector('#lista-tarefas');
const taskLi = document.getElementsByTagName('li');

function createTodo() {
  const createLi = document.createElement('li');
  const text = todoText.value;
  todoList.appendChild(createLi).innerText = text;
  todoText.value = '';
}

createButton.addEventListener('click', createTodo);

//selecionar li
let liTarget = '';

function selectedLi(event) {
  for(let index = 0; index < taskLi.length; index += 1 ){
    taskLi[index].style.backgroundColor = 'white';
  }
  liTarget = event.target;
  liTarget.style.backgroundColor = 'rgb(128, 128, 128)';
  console.log(taskLi);
}

todoList.addEventListener('click', selectedLi);

//tarefa completa
function completTask(event) {
  if (liTarget.className === 'completed') {
    liTarget.classList.remove('completed');
  } else {
    liTarget.classList.add('completed');
    console.log(taskLi);
  }
}

todoList.addEventListener('dblclick', completTask);

//limpar todas as tasks
const clearButton = document.getElementById('apaga-tudo');

clearButton.addEventListener('click', function() {
  for (let index = 0; index < todoList.children.length; index = 0) {
    todoList.removeChild(taskLi[index]);
  }
  console.log('ta rodando');
});