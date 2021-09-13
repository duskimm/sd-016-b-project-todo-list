const orderedList = document.getElementById('lista-tarefas');
const inputTasks = document.getElementById('texto-tarefa');
const taskButton = document.getElementById('criar-tarefa');
const itens = document.getElementsByClassName('itens');

function addClass(e) {
  for (let i = 0; i < itens.length; i += 1) {
    itens[i].classList.remove('selected');
  }
  e.target.classList.add('selected');
}

function addEventLi() {
  for (let i = 0; i < itens.length; i += 1) {
    itens[i].addEventListener('click', addClass);
  }
}
addEventLi();

function addTasks() {
  const inputValue = inputTasks.value;
  const createLi = document.createElement('li');
  createLi.className = 'itens';
  createLi.innerHTML = inputValue;
  orderedList.appendChild(createLi);
  inputTasks.value = '';
  addEventLi();
}

taskButton.addEventListener('click', addTasks);
