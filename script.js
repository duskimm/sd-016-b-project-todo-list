let listItems = {}

window.onload = function () {
  loadPreviousItems();
}

function getAvaiableID() {
  const keys = Object.keys(listItems);

  for (let i = 0; i <= keys.length; i++) {
    if (!keys[i]) return i
  }

  return keys.length + 1
}

function addListItem(settings) {
  const newID = getAvaiableID()

  const li = document.createElement('li');
  li.innerText = settings.text;
  li.setAttribute('internal-id', newID);
  li.addEventListener('click', onClickListItem);
  li.addEventListener('dblclick', onDblClickListItem);

  if (settings.completed) {
    li.classList.add('completed');
  }

  listItems[newID] = settings

  const list = document.querySelector("#lista-tarefas");
  list.appendChild(li);
}

function onClickListItem(event) {
  const previousSelected = document.querySelector(".selected");

  if (previousSelected) {
    previousSelected.classList.remove("selected");
  }

  event.target.classList.add("selected");
}

function onDblClickListItem(event) {
  const id = event.target.getAttribute('internal-id');

  if (!id) return;

  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
    delete listItems[id].completed
  } else {
    event.target.classList.add('completed');
    listItems[id].completed = true
  }
}

function removeListItem(li) {
  const id = li.getAttribute('internal-id');
  li.parentElement.removeChild(li);
  delete listItems[id];
}

function onClickCreateTask() {
  const input = document.querySelector("#texto-tarefa");
  addListItem({ text: input.value });
  input.value = '';
}

function removeFromListItemsUsingQuerySelector(queryString) {
  for (let li of document.querySelectorAll(queryString)) {
    removeListItem(li)
  }
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

  const firstID = first.getAttribute('internal-id');
  const secondID = second.getAttribute('internal-id');

  first.setAttribute('internal-id', secondID)
  second.setAttribute('internal-id', firstID)

  const cache = listItems[firstID]
  listItems[firstID] = listItems[secondID]
  listItems[secondID] = cache

  first.parentElement.insertBefore(first, second);
}

function onClickMoveTop() {
  const selected = document.querySelector('.selected');
  const previousElement = selected && selected.previousElementSibling
  return switchElements(selected, previousElement);
}

function onClickMoveBottom() {
  const selected = document.querySelector('.selected');
  const nextElement = selected && selected.nextElementSibling
  return switchElements(nextElement, selected);
}

function loadPreviousItems() {
  let savedList = localStorage.getItem('todo-list');
  if (savedList) {
    try {
      savedList = JSON.parse(savedList);
      for (let key in savedList) {
        addListItem(savedList[key]);
      }
    } catch {
      // localStorage.removeItem('todo-list');
    }
  }
}
