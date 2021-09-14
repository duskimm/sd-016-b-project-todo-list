/* eslint-disable sonarjs/no-duplicate-string */
function creationInput() {
  const inputArea = document.querySelector('#input-area');
  const input = document.createElement('input');
  input.id = 'texto-tarefa';
  input.placeholder = 'Adicionar tarefa';
  input.style.textAlign = '';
  inputArea.appendChild(input);
}

creationInput();

function creationTaskList() {
  const listArea = document.querySelector('#list-area');
  const taskList = document.createElement('ol');
  taskList.id = 'lista-tarefas';
  listArea.appendChild(taskList);
}

creationTaskList();

function addButton() {
  const buttonInput = document.querySelector('#input-area');
  const button = document.createElement('button');
  button.id = 'criar-tarefa';
  button.style.margin = '5px';
  button.innerText = '+';
  buttonInput.appendChild(button);
}

addButton();

function creatinigTasks() {
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', () => {
    const orderedList = document.querySelector('#lista-tarefas');
    const input = document.querySelector('#texto-tarefa');
    const text = input.value;
    const list = document.createElement('li');
    list.innerText = text;
    orderedList.appendChild(list);
    input.value = '';
  });
}

creatinigTasks();

function paintList() {
  const orderList = document.querySelector('ol');
  orderList.addEventListener('click', (event) => {
    const color = document.querySelector('.color');
    if (color === null) {
      event.target.classList.toggle('color');
    } else {
      color.classList.remove('color');
      event.target.classList.toggle('color');
    }
  });
}

paintList();

// Requisito 9
function finishedTask() {
  const orderedList = document.querySelector('#lista-tarefas');
  orderedList.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}

finishedTask();

// Requisito 10
function createButtonClean() {
  const buttonArea = document.querySelector('#button-area');
  const buttonClean = document.createElement('button');
  buttonClean.innerText = 'Limpar';
  buttonClean.id = 'apaga-tudo';
  buttonClean.style.margin = '5px';
  buttonClean.addEventListener('click', () => {
    const list = document.querySelectorAll('li');
    for (let index = 0; index < list.length; index += 1) {
      list[index].remove();
    }
  });
  buttonArea.appendChild(buttonClean);
}

createButtonClean();

// Reaquisito 11
function createButtonFinalized() {
  const buttonArea = document.querySelector('#button-area');
  const buttonRemoveFinalized = document.createElement('button');
  buttonRemoveFinalized.innerText = 'Remover Itens completos';
  buttonRemoveFinalized.id = 'remover-finalizados';
  buttonRemoveFinalized.addEventListener('click', () => {
    const completedItem = document.querySelectorAll('.completed');
    for (let index = 0; index < completedItem.length; index += 1) {
      completedItem[index].remove();
    }
  });
  buttonArea.appendChild(buttonRemoveFinalized);
}

createButtonFinalized();
