const toDoList = document.querySelector('#lista-tarefas');
const lista = document.getElementsByTagName('li');

// https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/removeProperty
function markText(event) {
  const paintGrey = event.target;
  for (let index = 0; index < lista.length; index += 1) {
    lista[index].style.removeProperty('background-color');
  }
  paintGrey.style.backgroundColor = 'grey';
}

function click() {
  for (let index = 0; index < lista.length; index += 1) {
    lista[index].addEventListener('click', markText);
  }
}

function tachada(event) {
  const tachado = event.target;
  if (tachado.className === 'completed') {
    tachado.removeAttribute('class');
  } else {
    tachado.classList.add('completed');
  }
}

function doubleclick() {
  for (let index = 0; index < lista.length; index += 1) {
    document.querySelectorAll('li')[index].addEventListener('dblclick', tachada);
  }
}

function addToList() {
  const list = document.createElement('li');
  const input = document.getElementById('texto-tarefa');
  list.innerText = input.value;
  toDoList.appendChild(list);
  input.value = '';
  click();
  doubleclick();
}

document.getElementById('criar-tarefa').addEventListener('click', addToList);

function eraseList() {
  const erase = document.querySelectorAll('li');
  for (let index = 0; index < erase.length; index += 1) {
    erase[index].remove();
  }
}

document.getElementById('apaga-tudo').addEventListener('click', eraseList);

function removeCompleted() {
  const remove = document.querySelectorAll('.completed');
  for (let index = 0; index < remove.length; index += 1) {
    remove[index].remove();
  }
}

document.getElementById('remover-finalizados').addEventListener('click', removeCompleted);

// https://developer.mozilla.org/pt-BR/docs/Web/API/Storage/setItem
function save() {
  localStorage.setItem('toDoList', toDoList.innerHTML);
  click();
  doubleclick();
}

// https://developer.mozilla.org/pt-BR/docs/Web/API/Storage/getItem
function loadPage() {
  toDoList.innerHTML = localStorage.getItem('toDoList');
  click();
  doubleclick();
}
window.onload = loadPage;

document.getElementById('salvar-tarefas').addEventListener('click', save);

function removeSelected() {
  for (let index = lista.length - 1; index >= 0; index -= 1) {
    if (lista[index].style.backgroundColor === 'grey') {
      lista[index].remove();
    }
  }
}

document.getElementById('remover-selecionado').addEventListener('click', removeSelected);

// https://youtu.be/Qx8Mo5iPzZk
function up() {
  for (let index = 0; index < lista.length; index += 1) {
    if (lista[index].style.backgroundColor === 'grey' && (index - 1) !== -1) {
      toDoList.insertBefore(lista[index], lista[index - 1]);
    }
  }
}

document.getElementById('mover-cima').addEventListener('click', up);

function down() {
  for (let index = lista.length - 1; index >= 0; index -= 1) {
    if (lista[index].style.backgroundColor === 'grey' && (index + 1) !== lista.length) {
      toDoList.insertBefore(lista[index + 1], lista[index]);
    }
  }
}

document.getElementById('mover-baixo').addEventListener('click', down);
