// Variaveis Globais
const divInput = document.querySelector('#inputlist');
const sectionButton = document.querySelector('#button');
const buttonTask = document.querySelector('#button');
const divOl = document.querySelector('#olList');
// Variáveis Globais

// 1
function creatInput() {
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'texto-tarefa';
  divInput.appendChild(input);
}
creatInput();

function creatOl() {
  const olList = document.createElement('ol');
  olList.id = 'lista-tarefas';
  divOl.appendChild(olList);
}
creatOl();

function taskButton() {
  const button = document.createElement('button');
  button.id = 'criar-tarefa';
  button.innerText = 'Criar';
  buttonTask.appendChild(button);
}
taskButton();
// Variaveis Globais
const textoInput = document.querySelector('#texto-tarefa');
const ol = document.querySelector('#lista-tarefas');
// Variaveis Globais
sectionButton.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerText = textoInput.value;
  ol.appendChild(li);
  textoInput.value = '';
});

// const listButton = document.getElementById('criar-tarefa');
// const eventTarget = event.target;
