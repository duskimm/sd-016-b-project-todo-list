const body = document.querySelector('body');
let main;

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

function mkInput() {
  const createInput = document.createElement('input');
  const toMain = document.querySelector('main'); main = toMain;
  createInput.id = 'texto-tarefa';
  main.appendChild(createInput);
}

function mkList() {
  const createOl = document.createElement('ol');
  main.appendChild(createOl);
  createOl.id = 'lista-tarefas';
}

window.onload = function start() {
  mkHeader();
  mkMain();
  mkParagraph();
  mkInput();
  mkList();
};
