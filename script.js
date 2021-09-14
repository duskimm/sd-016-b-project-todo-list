// 1. Criar header
function createHeader() {
  const newHeader = document.createElement('header');
  newHeader.innerHTML = 'Minha Lista de Tarefas';
  document.body.appendChild(newHeader);
}
createHeader();

// 2. Criar p
function createP() {
  const newP = document.createElement('p');
  newP.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  newP.id = 'funcionamento';
  document.body.appendChild(newP);
}
createP();

// 3. Criar input
function createInput() {
  const newInput = document.createElement('input');
  newInput.id = 'texto-tarefa';
  newInput.name = 'input';
  newInput.value = '';
  document.body.appendChild(newInput);
}
createInput();

// 4.Criar OL
function createOl() {
  const newOl = document.createElement('ol');
  newOl.id = 'lista-tarefas';
  document.body.appendChild(newOl);
}
createOl();

// 5. Create button
function createButton() {
  const newButton = document.createElement('button');
  newButton.id = 'criar-tarefa';
  newButton.innerHTML = 'Adicionar';
  document.body.appendChild(newButton);
}
createButton();

function textInput() {
  const buttonClick = document.createElement('li');
  const inputValue = document.getElementById('texto-tarefa');
  const inputOl = document.getElementById('lista-tarefas');
  buttonClick.innerHTML = inputValue.value;
  inputValue.value = '';
  inputOl.appendChild(buttonClick);
}

const getListOl = document.getElementById('lista-tarefas');
const getButtonText = document.getElementById('criar-tarefa');
getButtonText.addEventListener('click', textInput);

// 7.
function SetColorItem() {
  const getItemLi = document.getElementsByTagName('li');
  getListOl.addEventListener('click', function(event) {
  for (let index = 0; index < getItemLi.length; index += 1) {
  getItemLi[index].style.backgroundColor = 'rgb(255,255,255)';
}
event.target.style.backgroundColor = 'rgb(128,128,128)';
  });
}
SetColorItem();

// 9.

getListOl.addEventListener('dblclick', function(event) {
  if(event.target.className != 'completed'){
    event.target.classList.add('completed'); }
  else {
  event.target.classList.remove('completed');
  }
});

// 10.

function createButtonEraser() {
  const buttonEraser = document.createElement('button');
  buttonEraser.id = 'apaga-tudo';
  buttonEraser.innerHTML = 'Apagar';
  document.body.appendChild(buttonEraser);
}
createButtonEraser();

const getButtonErase = document.getElementById('apaga-tudo');
const getListLi = document.getElementById('lista-tarefas');

function buttonEraser() {
  getListLi.innerHTML = '';
}

getButtonErase.addEventListener('click', buttonEraser);
