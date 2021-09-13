const btnAddTask = document.querySelector('#criar-tarefa');
const inputTask = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas')
const btnRemoveAll = document.querySelector('#apaga-tudo')
btnRemoveAll.addEventListener('click', removeAll)
btnAddTask.addEventListener('click', createTask);
list.addEventListener('click', changeBackgroundColor)
list.addEventListener('dblclick', addTaskToCompleted)


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
  const task = document.querySelectorAll('.list-item')
  let eventTarget = event.target;
  /* verifica se existe a classe taskSelected na tarefa */
  for (let i = 0; i < task.length; i += 1) {
    if (task[i].classList.contains('taskSelected')) {
      task[i].classList.remove('taskSelected');
    } 
  } eventTarget.classList.add('taskSelected')
}

function addTaskToCompleted(event) {
  const eventTarget = event.target;
  if (eventTarget.classList.contains('completed') === false) {
    event.target.classList.add('completed');
  }
  else {
    event.target.classList.remove('completed');
  }
}

function removeAll() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

}