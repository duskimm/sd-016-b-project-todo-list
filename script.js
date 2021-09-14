const body = document.getElementsByTagName('body')[0];

function addMain() {
  const newMain = document.createElement('main');
  newMain.id = 'main';
  body.appendChild(newMain);
}
addMain();
const main = document.getElementById('main');

// REQUISITO 1
function addHeader() {
  const newHeader = document.createElement('header');
  newHeader.innerHTML = '<h1>Minha Lista de Tarefas</h1>';
  main.appendChild(newHeader);
}
addHeader();

// REQUISITO 2
function addFuncionamento() {
  const newParagraph = document.createElement('p');
  newParagraph.id = 'funcionamento';
  newParagraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

  main.appendChild(newParagraph);
}
addFuncionamento();

// REQUISITO 3
function addInput() {
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.id = 'texto-tarefa';

  main.appendChild(newInput);
}
addInput();
