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

//selecionar li
let liTarget = '';

function selectedLi(event){
  unselecteLi();
  liTarget = event.target
  liTarget.className = 'selected'
}

function unselecteLi(){
  if (liTarget.className === 'selected'){
    liTarget.classList.remove('selected');
  }
}
todoList.addEventListener('click', selectedLi);

//tarela completa ---- resolver, mais de uma selecao 
function completTask(event) {
  if (liTarget.className === 'selected') {
    liTarget.classList = 'selected completed';
    unselecteLi();
    console.log(event.target);
  }
}

todoList.addEventListener('dblclick', completTask);