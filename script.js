const body = document.querySelector('body');
let main;
let input;

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
  createInput.type = 'text';
  main.appendChild(createInput);
  const toInput = document.querySelector('input'); input = toInput;
}

function mkList() {
  const createOl = document.createElement('ol');
  main.appendChild(createOl);
  createOl.id = 'lista-tarefas';
}

function mkNewListItem(inputContent) {
  const ol = document.querySelector('ol');
  const createLI = document.createElement('li');
  createLI.innerHTML = inputContent;
  ol.appendChild(createLI);
}

function mkButton() {
  const createButton = document.createElement('button');
  createButton.id = 'criar-tarefa';
  createButton.innerHTML = 'criar-tarefa';
  main.insertBefore(createButton, main.children[1]);
  createButton.addEventListener('click', function tkRstInput() {
    mkNewListItem(input.value);
    input.value = '';
  });
}

window.onload = function start() {
  mkHeader();
  mkMain();
  mkParagraph();
  mkInput();
  mkList();
  mkButton();
};
