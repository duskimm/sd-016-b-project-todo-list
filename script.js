const btnAddTask = document.querySelector('#criar-tarefa');
const inputTask = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas')
btnAddTask.addEventListener('click', createTask);

function createTask() {
  let inputValue = inputTask.value;
  if (inputValue === '') {
    window.alert('Insira uma tarefa valida!')
  } else {
    const createListItem = document.createElement('li');
    createListItem.innerHTML = inputValue
    list.appendChild(createListItem)
    inputTask.value = ''
  }
}