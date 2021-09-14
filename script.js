// Variaveis Globais
const divInput = document.querySelector('#inputlist');
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
// Parte 3
function removeSelected() {
  const li = document.querySelectorAll('.not-selected');
  for (let index = 0; index < li.length; index += 1) {
    li[index].classList.remove('selected');
    li[index].style.background = 'white';
  }
}
// Parte 2
function addClick(event) {
  const targetE = event.target;
  removeSelected();
  targetE.style.background = 'rgb(128, 128, 128)';
}
// Parte 1
const creatButton = document.getElementById('criar-tarefa');
creatButton.addEventListener('click', () => {
  const li = document.createElement('li');
  li.className = 'not-selected';
  li.innerText = textoInput.value;
  ol.appendChild(li);
  textoInput.value = '';
  li.addEventListener('click', addClick); // Parte 1/2;
});

ol.addEventListener('dblclick', (event) => {
  const targetE = event.target;
  if (targetE.className === 'completed') {
    targetE.className = 'not-selected';
  } else {
    targetE.className = 'completed';
  }
});
