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

const dinamicVariables = {
  taskItems: getAll('.task-item'),
  listItems: getAll('li'),
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
    attVariables();
    selectAllTasks();
  });
}

// Seleção de elemento (retirada do backgorundColor)

function selectAllTasks() {
  const taskItems = dinamicVariables.taskItems;

  addMultiplesListeners(taskItems, 'click', changeSelection);
}

function resetSelection() {
  const listItems = dinamicVariables.listItems;

  listItems.forEach((item) => {
    removeClass(item, 'selected');
  });
}

function changeSelection(event) {
  const taskItem = event.target;
  
  resetSelection();
  addClass(taskItem, 'selected');
}

function attVariables() {
  dinamicVariables.listItems = getAll('li');
  dinamicVariables.taskItems = getAll('.task-item');
}

// Riscar elemento (line-through solid rgb(0, 0, 0)) ao clicar duas vezes

// Resetar tudo ao clicar no botão 'Apagar'

// Apagar itens riscados através do botão 'Prontos'

window.onload = () => {
  getTask();
  addTaskToList();
}
