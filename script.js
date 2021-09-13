const toDoSend = document.querySelector('#criar-tarefa');
const appendList = document.querySelector('#lista-tarefas');
const getToDoValue = document.querySelector('#texto-tarefa');

function toDoCreation() {
  if (getToDoValue.value !== '') {
    let createElementList = document.createElement('li');
    createElementList.innerHTML = getToDoValue.value;
    appendList.appendChild(createElementList);
    getToDoValue.value = '';
  } else {
    alert('Informar uma tarefa');
  }
}
toDoSend.addEventListener('click', toDoCreation);
