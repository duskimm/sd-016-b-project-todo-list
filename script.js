const button = document.querySelector("#criar-tarefa");
const listOfTasks = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');

function createTask () {

}

function addTasksInList(class) {
    const list = document.createElement('li');
    list.className = class;
    listOfTasks.appendChild(list);
}

button.addEventListener('click',createTask);