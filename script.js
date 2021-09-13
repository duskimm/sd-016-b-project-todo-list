function mkHeader() {
  const body = document.querySelector('body');
  const createHeader = document.createElement('header');
  console.log(body);
  body.appendChild(createHeader);
  createHeader.innerHTML = 'Minha Lista de Tarefas'
}

window.onload = function start() {
  mkHeader();
};