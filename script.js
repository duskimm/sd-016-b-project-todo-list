const body = document.getElementsByTagName('body')[0];

function addMain() {
  const newMain = document.createElement('main');
  newMain.id = 'main';
  body.appendChild(newMain);
}
addMain();
const main = document.getElementById('main');

// REQUISITO 1
function addHeader() {
  const newHeader = document.createElement('header');
  newHeader.innerHTML = '<h1>Minha Lista de Tarefas</h1>';
  main.appendChild(newHeader);
}
addHeader();

// REQUISITO 2
function addFuncionamento() {
  const newParagraph = document.createElement('p');
  newParagraph.id = 'funcionamento';
  newParagraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

  main.appendChild(newParagraph);
}
addFuncionamento();

// REQUISITO 3
function addInput() {
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.id = 'texto-tarefa';

  main.appendChild(newInput);
}
addInput();

// REQUISITO 4
function addOrdenedList() {
  const newOrdenedList = document.createElement('ol');
  newOrdenedList.id = 'lista-tarefas';

  main.appendChild(newOrdenedList);
}
addOrdenedList();

// REQUISITO 5
function addCreateButton() {
  const newButton = document.createElement('button');
  newButton.id = 'criar-tarefa';
  newButton.innerText = 'Adicionar Tarefa';

  main.appendChild(newButton);
}
addCreateButton();

function newTask() {
  const createButton = document.getElementById('criar-tarefa');
  const task = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');

  createButton.addEventListener('click', (event) => {
    let newTask = document.createElement('li');
    newTask.innerText = task.value;
    list.appendChild(newTask);
    task.value = '';
  });
}
newTask();
