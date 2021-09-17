// Declarações
let newTaskButton = document.getElementById('criar-tarefa');
let taskList = document.getElementById('lista-tarefas');
let taskInput = document.getElementById('texto-tarefa');

newTaskButton.addEventListener('click', addTask);

// Funções
function addTask(){
    const li = document.createElement('li');
    li.innerText = taskInput.value;
    if (li.innerText === ""){
        alert("Tarefa em branco.");
    } else {
        taskInput.value = "";
        taskList.appendChild(li);
        li.addEventListener('click', selectTask);
        li.addEventListener('dblclick', completeTask)
    }
}

function selectTask(event){
    const selectedTask = document.querySelectorAll('li');
    for (let i = 0; i < selectedTask.length; i += 1){
        selectedTask[i].style.backgroundColor = '';
    }
    event.target.style.backgroundColor = "rgb(128, 128, 128)";
}

function completeTask(event){
    const completedTask = event.target;
    if (completedTask.classList.contains('completed')){
        completedTask.classList.remove('completed');
    } else {
        completedTask.classList.add('completed');
    }
}

// Referências JS:
// https://www.w3schools.com/howto/howto_js_todolist.asp
// https://youtu.be/-pRg_daFjfk
// https://youtu.be/pRwxgtqImZQ
