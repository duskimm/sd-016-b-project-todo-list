const btnAddTask = document.querySelector('#criar-tarefa');
const inputTask = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas')
btnAddTask.addEventListener('click', createTask);
list.addEventListener('click', changeBackgroundColor)


function createTask() {
  let inputValue = inputTask.value;
  if (inputValue === '') {
    window.alert('Insira uma tarefa valida!')
  } else {
    const createListItem = document.createElement('li');
    createListItem.className = "list-item";
    createListItem.innerHTML = inputValue;
    list.appendChild(createListItem);
    inputTask.value = '';
  }
}

function changeBackgroundColor(event) {
  let eventTarget = event.target;
  console.log(eventTarget)
  eventTarget.style.backgroundColor = ' rgb(128, 128, 128)'
}