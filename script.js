const addTaskButton = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const text = document.getElementById('texto-tarefa');

function changeToGrey(event) {
  const listItems = document.querySelectorAll('li');
  for (let index = 0; index < listItems.length; index += 1) {
    if (listItems[index].style.backgroundColor = 'rgb(128,128,128)') {
      listItems[index].style.backgroundColor = 'white';
    }
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}

function addTasks() {
  const newListItem = document.createElement('li');
  newListItem.addEventListener('click', changeToGrey);
  list.appendChild(newListItem);
  newListItem.innerText = text.value;
  text.value = '';
}
addTaskButton.addEventListener('click', addTasks);

function lineThrough(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
list.addEventListener('dblclick', lineThrough);
