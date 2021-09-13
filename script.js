// functions for working with elements

function getOne(element) {
  return document.querySelector(element);
}

function getAll(element) {
  return document.querySelectorAll(element);
}

function createElement(tag) {
  return document.createElement(tag);
}

function addClass(element, newClass) {
  element.classList.add(newClass);
}

function removeClass(element, delClass) {
  element.classList.remove(delClass);
}

function plugHtml(fatherElement, sonElement) {
  fatherElement.appendChild(sonElement);
}

function removeOfHtml(fatherElement, sonElement) {
  fatherElement.removeChild(sonElement);
}

function addMultiplesEvents(element, eventsName, listener) {
  const events = eventsName.split(' ');

  events.forEach((event) => {
    element.addEventListener(event, listener, false);
  });
}

function addMultiplesListeners(arr, event, listener) {
  arr.forEach((i) => {
    i.addEventListener(event, listener, false);
  });
}

// global variables

const user = {
  msg: '',
}

const taskInput = getOne('#texto-tarefa');
const taskList = getOne('#lista-tarefas');
const buttonAdd = getOne('#criar-tarefa');

// functions for the project

function getTask() {
  taskInput.addEventListener('keyup', (event) => {
    user.msg = event.target.value;
  });
}

function createTaskItem() {
  const newTaskItem = createElement('li');
  addClass(newTaskItem, 'task-item');
  newTaskItem.innerText = user.msg;
  plugHtml(taskList, newTaskItem);
}

function addTaskToList() {
  buttonAdd.addEventListener('click', () => {
    createTaskItem();
    selectAllTasks();
  });
}

// Seleção de elemento (retirada do backgorundColor)

function selectAllTasks() {
  const taskItems = getAll('.task-item');

  addMultiplesListeners(taskItems, 'click', changeSelection)
}

function changeSelection(event) {
  const taskItem = event.target;

  if (taskItem.className === 'task-item') {
    removeClass(taskItem, 'task-item');
  }
}

// Riscar elemento (line-through solid rgb(0, 0, 0)) ao clicar duas vezes

// Resetar tudo ao clicar no botão 'Apagar'

// Apagar itens riscados através do botão 'Prontos'

window.onload = () => {
  getTask();
  addTaskToList();
}
