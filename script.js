function creatElementHTML(tagName) {
  const element = document.createElement(tagName);
  return element;
}

function addElementToDOM(parent, element) {
  parent.appendChild(element);
}

function setId(elementName, idName) {
  const element = elementName;
  element.id = idName;
}

/*
function setClass(elementName, className) {
  const element = elementName;
  element.classList.add(className);
}
*/

function setInnerText(elementName, text) {
  const element = elementName;
  element.innerText = text;
}

const header = document.querySelector('header');

const main = document.querySelector('main');

const title = creatElementHTML('h1');
setInnerText(title, 'Minha Lista de Tarefas');
addElementToDOM(header, title);

const paragraph = creatElementHTML('p');
setId(paragraph, 'funcionamento');
setInnerText(paragraph, 'Clique duas vezes em um item para marcá-lo como completo');
addElementToDOM(header, paragraph);

const input = creatElementHTML('input');
setId(input, 'texto-tarefa');
input.type = 'text';
addElementToDOM(main, input);

const taskList = creatElementHTML('ol');
setId(taskList, 'lista-tarefas');
addElementToDOM(main, taskList);

const button = creatElementHTML('button');
setId(button, 'criar-tarefa');
setInnerText(button, 'Criar');
addElementToDOM(main, button);

function createTask() {
  if (input.value !== '') {
    const task = creatElementHTML('li');
    setInnerText(task, input.value);
    addElementToDOM(taskList, task);
    input.value = '';
  } else {
    alert('Ops! Você ainda não inseriu a tarefa.');
  }
}

button.addEventListener('click', createTask);
