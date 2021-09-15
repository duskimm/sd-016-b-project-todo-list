const toDoSend = document.querySelector('#criar-tarefa');
const appendList = document.querySelector('#lista-tarefas');
const getToDoValue = document.querySelector('#texto-tarefa');

function toDoCreation() {
  const createElementList = document.createElement('li');
  createElementList.innerHTML = getToDoValue.value;
  appendList.appendChild(createElementList);
  getToDoValue.value = '';
}
toDoSend.addEventListener('click', toDoCreation);

function backgroundToDoList() {
  appendList.addEventListener('click', (e) => {
    const taskColor = document.querySelectorAll('li');
    for (let index = 0; index < taskColor.length; index += 1) {
      taskColor[index].classList.remove('selected');
      taskColor[index].style.backgroundColor = 'rgb(194, 194, 194)';
    }
    e.target.classList.add('selected');
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
    erase[index].remove();
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
    const saveList = appendList.innerHTML;
    localStorage.setItem('toDoList', saveList);
  });
}
saveToDoList();

function removeSelected() {
  const removeOnlyOne = document.querySelectorAll('.selected');
  for (let index = 0; index < removeOnlyOne.length; index += 1) {
    removeOnlyOne[index].remove('selected');
  }
}
document.querySelector('#remover-selecionado').addEventListener('click', removeSelected);

// Análise, estudo e estrutura do challenge 13 com base no projeto do Matheus Nugas.

function buttonUp() {
  document.querySelector('#mover-cima').addEventListener('click', () => {
    const selectedTarget = document.querySelector('.selected');
    if (selectedTarget === null || undefined) {
      return;
    }
    if (selectedTarget.previousElementSibling === null || undefined) {
      alert('Está no topo da lista');
    } else {
      const taskGoUp = selectedTarget.previousElementSibling;
      appendList.insertBefore(selectedTarget, taskGoUp);
    }
  });
}
buttonUp();

function buttonDown() {
  document.querySelector('#mover-baixo').addEventListener('click', () => {
    const target = document.querySelector('.selected');
    if (target === null || undefined) {
      return;
    }
    if (target.nextElementSibling === null || target.nextElementSibling === undefined) {
      alert('Está no fim da lista');
    } else {
      const taskGoDown = target.nextElementSibling;
      const taskGoNext = taskGoDown.nextElementSibling;
      appendList.insertBefore(target, taskGoNext);
    }
  });
}
buttonDown();

window.onload = function functioLoad() {
  document.getElementById('lista-tarefas').innerHTML = localStorage.getItem('toDoList');
};
