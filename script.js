const body = document.getElementsByTagName('body')[0];

function addMain() {
  const newMain = document.createElement('main');
  newMain.id = 'main';
  body.appendChild(newMain);
}
addMain();
const main = document.getElementById('main');

function addHeader() {
  const newHeader = document.createElement('header');
  newHeader.innerHTML = '<h1>Minha Lista de Tarefas</h1>';
  main.appendChild(newHeader);
}
addHeader();

function addFuncionamento() {
  const newParagraph = document.createElement('p');
  newParagraph.id = 'funcionamento';
  newParagraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

  main.appendChild(newParagraph);
}
addFuncionamento();

function addInput() {
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.id = 'texto-tarefa';

  main.appendChild(newInput);
}
addInput();

function addOrdenedList() {
  const newOrdenedList = document.createElement('ol');
  newOrdenedList.id = 'lista-tarefas';

  main.appendChild(newOrdenedList);
}
addOrdenedList();

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

  createButton.addEventListener('click', () => {
    const newTask = document.createElement('li');
    newTask.innerText = task.value;
    list.appendChild(newTask);
    task.value = '';

    newTask.addEventListener('click', () => {
      let newColor = 'rgb(128, 128, 128)';
      if (newTask.style.backgroundColor === newColor) {
        newTask.style.backgroundColor = 'white';
      } else {
        newTask.style.backgroundColor = newColor;
      }
    });
  });
}
newTask();
