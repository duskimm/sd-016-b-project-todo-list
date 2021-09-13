const toDoSend = document.querySelector('#criar-tarefa');
const appendList = document.querySelector('#lista-tarefas');
const getToDoValue = document.querySelector('#texto-tarefa');

function toDoCreation() {
  let createElementList = document.createElement('li');
  createElementList.innerHTML = getToDoValue.value;
  createElementList.classList = 'task';
  appendList.appendChild(createElementList);
  getToDoValue.value = '';
}
toDoSend.addEventListener('click', toDoCreation);

function backgroundToDoList() {
  const taskColor = document.querySelectorAll('li');

  for (let color of taskColor) {
    color.style.backgroundColor = 'rgb(194, 194, 194)';
    } 
    appendList.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}

backgroundToDoList();
