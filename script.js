const toDoSend = document.querySelector('#criar-tarefa');
const appendList = document.querySelector('#lista-tarefas');
const getToDoValue = document.querySelector('#texto-tarefa');

function toDoCreation() {
  const createElementList = document.createElement('li');
  createElementList.innerHTML = getToDoValue.value;
  createElementList.classList = 'task';
  appendList.appendChild(createElementList);
  getToDoValue.value = '';
}
toDoSend.addEventListener('click', toDoCreation);

function backgroundToDoList() {
  appendList.addEventListener('click', (e) => {
    const taskColor = document.querySelectorAll('li');
    for (let index = 0; index < taskColor.length; index += 1) {
      taskColor[index].style.backgroundColor = 'rgb(194, 194, 194)';
    }
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}
backgroundToDoList();

function toDoListDone() {
  appendList.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('completed')) {
      e.target.classList.remove('completed');
    } else {
      e.target.classList.add('completed');
    }
  });
}
toDoListDone();

function eraseAll() {
  const erase = document.querySelectorAll('li');
  for (let index = 0; index < erase.length; index += 1) {
    erase[index].remove('task');
  }
}
document.querySelector('#apaga-tudo').addEventListener('click', eraseAll);

function removeAllEnded() {
  const erase = document.querySelectorAll('.completed');
  for (let index = 0; index < erase.length; index += 1) {
    erase[index].remove('completed');
  }
}
document.querySelector('#remover-finalizados').addEventListener('click', removeAllEnded);

function saveToDoList() {
  document.querySelector('#salvar-tarefas').addEventListener('click', () => {
    let saveList = appendList.innerHTML;
    localStorage.setItem('toDoList', saveList);
  });
}
saveToDoList();

window.onload = function () {
  document.getElementById('lista-tarefas').innerHTML = localStorage.getItem('toDoList');
};
