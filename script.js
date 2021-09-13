const toDoList = document.querySelector('#lista-tarefas');

// https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/removeProperty
function markText(event) {
  const paintGrey = event.target;
  for (let index = 0; index < document.getElementsByTagName('li').length; index += 1) {
    document.getElementsByTagName('li')[index].style.removeProperty('background-color');
  }
  paintGrey.style.backgroundColor = 'grey';
}

function click() {
  for (let index = 0; index < document.getElementsByTagName('li').length; index += 1) {
    document.getElementsByTagName('li')[index].addEventListener('click', markText);
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
  for (let index = 0; index < document.getElementsByTagName('li').length; index += 1) {
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
