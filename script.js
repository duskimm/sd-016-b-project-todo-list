const listItems = {};
const idString = 'internal-id';

function getAvaiableID() {
  const keys = Object.keys(listItems);

  for (let i = 0; i <= keys.length; i += 1) {
    if (!keys[i]) return i;
  }

  return keys.length + 1;
}

function onClickListItem(event) {
  const previousSelected = document.querySelector('.selected');

  if (previousSelected) {
    previousSelected.classList.remove('selected');
  }

  event.target.classList.add('selected');
}

function onDblClickListItem(event) {
  const id = event.target.getAttribute(idString);

  if (!id) return;

  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
    delete listItems[id].completed;
  } else {
    event.target.classList.add('completed');
    listItems[id].completed = true;
  }
}

function addListItem(settings) {
  const newID = getAvaiableID();

  const li = document.createElement('li');
  li.innerText = settings.text;
  li.setAttribute(idString, newID);
  li.addEventListener('click', onClickListItem);
  li.addEventListener('dblclick', onDblClickListItem);

  if (settings.completed) {
    li.classList.add('completed');
  }

  listItems[newID] = settings;

  const list = document.querySelector('#lista-tarefas');
  list.appendChild(li);
}

function removeListItem(li) {
  const id = li.getAttribute(idString);
  li.parentElement.removeChild(li);
  delete listItems[id];
}

function onClickCreateTask() {
  const input = document.querySelector('#texto-tarefa');
  addListItem({ text: input.value });
  input.value = '';
}

function removeFromListItemsUsingQuerySelector(queryString) {
  const items = document.querySelectorAll(queryString);
  Array.from(items).map((item) => removeListItem(item));
}

function onClickClearAll() {
  return removeFromListItemsUsingQuerySelector('#lista-tarefas li');
}

function onClickClearFinished() {
  return removeFromListItemsUsingQuerySelector('#lista-tarefas li.completed');
}

function onClickClearSelected() {
  return removeFromListItemsUsingQuerySelector('#lista-tarefas li.selected');
}

function onClickSave() {
  localStorage.setItem('todo-list', JSON.stringify(listItems));
}

function switchElements(first, second) {
  if (!first || !second) return;

  const firstID = first.getAttribute(idString);
  const secondID = second.getAttribute(idString);

  first.setAttribute(idString, secondID);
  second.setAttribute(idString, firstID);

  const cache = listItems[firstID];
  listItems[firstID] = listItems[secondID];
  listItems[secondID] = cache;

  first.parentElement.insertBefore(first, second);
}

function onClickMoveTop() {
  const selected = document.querySelector('.selected');
  const previousElement = selected && selected.previousElementSibling;
  return switchElements(selected, previousElement);
}

function onClickMoveBottom() {
  const selected = document.querySelector('.selected');
  const nextElement = selected && selected.nextElementSibling;
  return switchElements(nextElement, selected);
}

function loadPreviousItems() {
  let savedList = localStorage.getItem('todo-list');

  if (!savedList) return;

  try {
    savedList = JSON.parse(savedList);
    Object.keys(savedList).map((e) => addListItem(savedList[e]));
  } catch (e) { console.error(e); }
}

function onLoad() {
  loadPreviousItems();

  document.getElementById('criar-tarefa').onclick = onClickCreateTask;
  document.getElementById('apaga-tudo').onclick = onClickClearAll;
  document.getElementById('remover-finalizados').onclick = onClickClearFinished;
  document.getElementById('remover-selecionado').onclick = onClickClearSelected;
  document.getElementById('salvar-tarefas').onclick = onClickSave;
  document.getElementById('mover-cima').onclick = onClickMoveTop;
  document.getElementById('mover-baixo').onclick = onClickMoveBottom;
}

window.onload = onLoad;
