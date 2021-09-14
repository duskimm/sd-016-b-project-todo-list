const body = document.getElementsByTagName('body')[0];

function addMain() {
  let main = document.createElement('main');
  main.id = 'main';
  body.appendChild(main);
}

addMain();
const main = document.getElementById('main');

// REQUISITO 1
function addHeader() {
  let header = document.createElement('header');
  header.innerHTML = '<h1>Minha Lista de Tarefas</h1>';
  main.appendChild(header);
}

addHeader();
