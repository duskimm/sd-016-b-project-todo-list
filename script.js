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

// global variables

const user = {
  msg: '',
}

const taskInput = getOne('#texto-tarefa');

// functions for the project

function getTask() {
  taskInput.addEventListener('keyup', (event) => {
    user.msg = event.target.value;
  });
}

// Adicionar texto a lista ao clicar no botão 'criar'

// Seleção de elemento (retirada do backgorundColor)

// Riscar elemento (line-through solid rgb(0, 0, 0)) ao clicar duas vezes

// Resetar tudo ao clicar no botão 'Apagar'

// Apagar itens riscados através do botão 'Prontos'

window.onload = () => {
  getTask();
}
