//quando eu clicar no botão um li será criada

const addTaskButton = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const text = document.getElementById('texto-tarefa');

function addTasks (){
    const newListItem = document.createElement('li');
    list.appendChild(newListItem);
    newListItem.innerText = text.value;
}
addTaskButton.addEventListener('click', addTasks);