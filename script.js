function creatElementHTML(tagName) {
  const element = document.createElement(tagName);
  return element;
}

function addElementToDOM(parent, element) {
  parent.appendChild(element);
}

/*
function setId(elementName, idName) {
  const element = elementName;
  element.id = idName;
}
*/

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

const title = creatElementHTML('h1');
setInnerText(title, 'Minha Lista de Tarefas');
addElementToDOM(header, title);
