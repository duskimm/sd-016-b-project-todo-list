const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const task = document.getElementsByClassName('tarefa');

function deselectAllItems() {
  for (let index = 0; index < task.length; index += 1) {
    if (task[index].classList.contains('selected') === true) {
      task[index].classList.toggle('selected');
    }
  }
}

function selectItem() {
  for (let index = 0; index < task.length; index += 1) {
    task[index].addEventListener('click', () => {
      deselectAllItems();
      task[index].classList.toggle('selected');
    });
  }
}

function addTask() {
  button.addEventListener('click', () => {
    const newTask = document.createElement('li');
    newTask.innerHTML = input.value;
    newTask.classList.add('tarefa');
    taskList.appendChild(newTask);
    input.value = '';
    selectItem();
  });
}

window.onload = () => {
  addTask();
  deselectAllItems();
};
