const toDoList = document.querySelector('#lista-tarefas');

function addToList() {
  const list = document.createElement('li');
  const input = document.getElementById('texto-tarefa');
  list.innerText = input.value;
  toDoList.appendChild(list);
  input.value = '';
  click();
}

// https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/removeProperty
function markText(event) {
  const paintGrey = event.target;
  for (let index = 0; index < document.getElementsByTagName('li').length; index += 1) {
    document.getElementsByTagName('li')[index].style.removeProperty('background-color');
  }
  paintGrey.style.backgroundColor = 'grey';
}

function click() {
  for (let index = 0; index < document.getElementsByTagName('li').length; index += 1){
    document.getElementsByTagName('li')[index].addEventListener('click', markText)
  }
}

document.getElementById('criar-tarefa').addEventListener('click', addToList);
