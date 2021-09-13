function creationHeader() {
  const body = document.querySelector('body');
  const header = document.createElement('header');
  body.appendChild(header);
  const h1 = document.createElement('h1');
  h1.innerText = 'Minha Lista de Tarefas.';
  h1.style.textAlign = 'center';
  header.appendChild(h1);
}

creationHeader();

function creationParagraph() {
  const body = document.getElementsByTagName('body')[0];
  const paragraph = document.createElement('p');
  paragraph.id = 'funcionamento';
  paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  paragraph.style.textAlign = 'center';
  body.appendChild(paragraph);
}

creationParagraph();

function creationInput() {
  const body = document.querySelector('body');
  const input = document.createElement('input');
  input.id = 'texto-tarefa';
  input.style.textAlign = '';
  body.appendChild(input);
}

creationInput();

function creationTaskList() {
  const body = document.querySelector('body');
  const taskList = document.createElement('ol');
  taskList.id = 'lista-tarefas';
  body.appendChild(taskList);
}

creationTaskList();

function addButton() {
  const body = document.querySelector('body');
  const button = document.createElement('button');
  button.id = 'criar-tarefa';
  button.innerText = 'Criar Tarefa';
  body.appendChild(button);
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
