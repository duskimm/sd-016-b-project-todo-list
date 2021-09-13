const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

function addTask() {
  button.addEventListener('click', () => {
    const task = document.createElement('li');
    task.innerHTML = input.value;
    taskList.appendChild(task);
    input.value = '';
  });
}
addTask();
