const orderedList = document.getElementById('lista-tarefas');
const inputTasks = document.getElementById('texto-tarefa');
const taskButton = document.getElementById('criar-tarefa');
const itens = document.getElementsByClassName('itens');
const clearButton = document.getElementById('apaga-tudo');
const clearDoneButton = document.getElementById('remover-finalizados');
const clearSelectedButton = document.getElementById('remover-selecionado');
const saveButton = document.getElementById('salvar-tarefas');

orderedList.innerHTML = localStorage.getItem('itens');

function addClassSelected(e) {
  for (let i = 0; i < itens.length; i += 1) {
    itens[i].classList.remove('selected');
  }
  e.target.classList.add('selected');
}

function addEventLi() {
  for (let i = 0; i < itens.length; i += 1) {
    itens[i].addEventListener('click', addClassSelected);
  }
}
addEventLi();

function addClassCompleted(e) {
  e.target.classList.toggle('completed');
}

function addNewEventLi() {
  for (let i = 0; i < itens.length; i += 1) {
    itens[i].addEventListener('dblclick', addClassCompleted);
  }
}
addNewEventLi();

function clearTasks() {
  orderedList.innerHTML = '';
}

clearButton.addEventListener('click', clearTasks);

function clearDone() {
  const getCompleted = document.getElementsByClassName('completed');
  while (getCompleted.length > 0) {
    getCompleted[0].parentNode.removeChild(getCompleted[0]);
  }
}
/* Recorri a seguinte referência para resolver essa parte:
https://qastack.com.br/programming/4777077/removing-elements-by-class-name */

clearDoneButton.addEventListener('click', clearDone);

function clearSelected() {
  const getSelected = document.getElementsByClassName('selected');
  getSelected[0].parentNode.removeChild(getSelected[0]);
}

clearSelectedButton.addEventListener('click', clearSelected);

function addTasks() {
  const inputValue = inputTasks.value;
  const createLi = document.createElement('li');
  createLi.className = 'itens';
  createLi.innerHTML = inputValue;
  orderedList.appendChild(createLi);
  inputTasks.value = '';
  addEventLi();
  addNewEventLi();
}

taskButton.addEventListener('click', addTasks);

function saveTasks() {
  const itensToSave = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('itens', itensToSave);
}

saveButton.addEventListener('click', saveTasks);
