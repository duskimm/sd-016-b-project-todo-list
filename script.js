const body = document.querySelector('body');
const main = document.querySelector('main');

function mkHeader() {
  const createHeader = document.createElement('header');
  createHeader.innerText = 'Minha Lista de Tarefas';
  body.appendChild(createHeader);
}

function mkMain() {
  const createMain = document.createElement('main');
  body.appendChild(createMain);
}

function mkParagraph() {
  const header = document.querySelector('header');
  const createParagraph = document.createElement('p');
  createParagraph.id = 'funcionamento';
  createParagraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
  header.appendChild(createParagraph);
}

window.onload = function start() {
  mkHeader();
  mkMain();
  mkParagraph();
};
