const taskText = document.querySelector('#texto-tarefa');
const toDoList = document.querySelector('#lista-tarefas');
const addTaskButton = document.querySelector('#criar-tarefa');
const removeAllButton = document.querySelector('#apaga-tudo');
const removeCompletedTasksButton = document.querySelector('#remover-finalizados');

addTaskButton.addEventListener('click', addTask);
removeAllButton.addEventListener('click', removeAllTasks);
removeCompletedTasksButton.addEventListener('click', removeCompletedTasks);

