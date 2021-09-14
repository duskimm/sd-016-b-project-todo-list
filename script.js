const body = document.getElementsByTagName('body')[0];

function addMain() {
  const main = document.createElement('main');
  main.id = 'main';
  body.appendChild(main);
}
addMain();
const main = document.getElementById('main');

// REQUISITO 1
function addHeader() {
  const header = document.createElement('header');
  header.innerHTML = '<h1>Minha Lista de Tarefas</h1>';
  main.appendChild(header);
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
