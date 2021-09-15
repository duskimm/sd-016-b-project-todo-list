const lista = document.querySelector('#Lista-tarefas');
const item = document.getElementById('texto-tarefa');
const createButton = document.getElementById('criar-tarefa');
const items = document.getElementsByClassName('list-itens');
const clear = document.getElementById('apaga-tudo');
const getCompletedButton = document.getElementById('remover-finalizados');
const getSaveListButton = document.getElementById('salvar-tarefas');
const getMoveUpButton = document.getElementById('mover-cima');
const getMoveDownButton = document.getElementById('mover-baixo');
const getRemoveButton = document.getElementById('remover-selecionado');

function selectItem(event) {
  for (let i = 0; i < items.length; i += 1) {
    items[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function createTask() {
  if (item.value !== '') {
    const liItem = document.createElement('li');
    const itemValue = item.value;
    liItem.innerText = itemValue;
    liItem.classList.add('list-itens');
    lista.appendChild(liItem);
    item.value = '';
    liItem.addEventListener('click', selectItem);
  }
}

createButton.addEventListener('click', createTask);

// metodo toggle https://www.horadecodar.com.br/2020/10/08/detectar-se-um-elemento-contem-uma-classe-com-javascript/
function completedItem(event) {
  event.target.classList.toggle('completed');
}
lista.addEventListener('dblclick', completedItem);

function removeAll() {
  while (lista.firstChild) {
    lista.removeChild(lista.lastChild);
  }
}
clear.addEventListener('click', removeAll);

function removeCompleted() {
  const getCompleted = document.getElementsByClassName('completed');
  while (getCompleted.length > 0) {
    lista.removeChild(getCompleted[0]);
  }
}
getCompletedButton.addEventListener('click', removeCompleted);

function save() {
  const savedList = lista.innerHTML;

  localStorage.setItem('saved-list', savedList);
  alert('Lista Salva!');
}
getSaveListButton.addEventListener('click', save);

window.onload = function storage() {
  lista.innerHTML = localStorage.getItem('saved-list');
  for (let i = 0; i < items.length; i += 1) {
    items[i].addEventListener('click', selectItem);
  }
};
function mooveUP() {
  const selectedItem = document.querySelector('.selected');

  if (selectedItem === null) {
    return alert('Nenhum item selecionado!');
  }
  if (selectedItem.previousElementSibling === null
  || selectedItem.previousElementSibling === undefined) {
    return alert('O Item já está na primeira posição !');
  }

  // creditos a Matheus Nugas pelo algoritmo .
  lista.insertBefore(selectedItem, selectedItem.previousElementSibling);
}

function mooveDown() {
  const selectedItem = document.querySelector('.selected');

  if (selectedItem == null) {
    return alert('Nenhum item selecionado!');
  }

  if (selectedItem.nextElementSibling === null || selectedItem.nextElementSibling === undefined) {
    return alert('O Item já está na ultima posição !');
  }

  const mooveDownItem = selectedItem.nextElementSibling.nextElementSibling;
  lista.insertBefore(selectedItem, mooveDownItem);
}
getMoveUpButton.addEventListener('click', mooveUP);
getMoveDownButton.addEventListener('click', mooveDown);

function removeSelected() {
  const selectedItem = document.querySelector('.selected');
  lista.removeChild(selectedItem);
}

getRemoveButton.addEventListener('click', removeSelected);
