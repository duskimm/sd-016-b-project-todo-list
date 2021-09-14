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
  const buttonArea = document.querySelector('#button-area');
  const button = document.createElement('button');
  button.id = 'criar-tarefa';
  button.innerText = 'Criar Tarefa';
  buttonArea.appendChild(button);
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
    list.className = 'selected';
    orderedList.appendChild(list);
    input.value = '';
  });
}

creatinigTasks();

function paintList() {
  const orderList = document.querySelector('ol');
  orderList.addEventListener('click', (event) => {
    event.target.className = 'color';
  });
}

paintList();

// Requisito 9
function finishedTask() {
  const orderedList = document.querySelector('#lista-tarefas');
  orderedList.addEventListener('dblclick', (event) => {
    const eventTarget = event.target;
    eventTarget.classList.toggle('completed');
  });
}

finishedTask();

// Requisito 10
function createButtonClean() {
  const buttonArea = document.querySelector('#button-area');
  const buttonClean = document.createElement('button');
  buttonClean.innerText = 'Limpar';
  buttonClean.id = 'apaga-tudo';
  buttonClean.addEventListener('click', () => {
    const list = document.querySelectorAll('li');
    for (let index = 0; index < list.length; index += 1) {
      list[index].remove();
    }
  });
  buttonArea.appendChild(buttonClean);
}

createButtonClean();
