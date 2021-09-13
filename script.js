//criar uma li
const todoText = document.getElementById('texto-tarefa');
const createButton = document.getElementById('criar-tarefa');
const todoList = document.querySelector('#lista-tarefas');

function createTodo() {
  const createLi = document.createElement('li');
  const text = todoText.value;
  todoList.appendChild(createLi).innerText = text;
}

createButton.addEventListener('click', createTodo);

//selecionar li
let liTarget = '';

function unselecteLi() {
  if (liTarget.className === 'selected' || liTarget.className === 'selected completed') {
    liTarget.classList.remove('selected');
  }
}
function selectedLi(event) {
  unselecteLi();
  liTarget = event.target;
  liTarget.className = 'selected';
}

todoList.addEventListener('click', selectedLi);

//tarela completa ---- resolver, mais de uma selecao
function completTask(event) {
  if (liTarget.className === 'selected') {
    unselecteLi();
    liTarget.classList = 'selected completed';
    console.log(event.target);
  }
}
todoList.addEventListener('dblclick', completTask);
