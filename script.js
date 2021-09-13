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
function removeSelected() {
  const li = document.querySelectorAll('.not-selected');
  for (let index = 0; index < li.length; index += 1) {
    li[index].classList.remove('selected');
    li[index].style.background = 'white';
  }
}

function addClick(event) {
  const targetE = event.target;
  removeSelected();
  targetE.style.background = 'rgb(128, 128, 128)';
}

sectionButton.addEventListener('click', () => {
  const li = document.createElement('li');
  li.className = 'not-selected';
  li.innerText = textoInput.value;
  ol.appendChild(li);
  textoInput.value = '';
  li.addEventListener('click', addClick);
});
// Variaveis globais

// const listButton = document.getElementById('criar-tarefa');
// const eventTarget = event.target;
