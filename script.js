const taskButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const taskText = document.getElementById('texto-tarefa');

function addButtonTask () {
    const newItem = document.createElement('li');
    newItem.innerText = taskText.value;
    taskList.appendChild(newItem);
    taskText.value = '';
}
taskButton.addEventListener('click', addButtonTask);

taskList.addEventListener('click', function (event) {
    if (event.target.id != 'lista-tarefas') {
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
});

