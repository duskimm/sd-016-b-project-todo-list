const addTask = document.querySelector("#criar-tarefa");
const taskInput = document.querySelector('#texto-tarefa');
let toDoList = document.querySelector("#lista-tarefas")
let previousSelected = document.getElementsByClassName("selected");
const resetAll = document.querySelector("#apaga-tudo");
const removeCompleted = document.querySelector("#remover-finalizados")
const createdTask = document.getElementsByClassName("tarefa-criada");

taskInput.addEventListener("input", function(event){
    event.target.value = this.value;
})
addTask.addEventListener("click", function(){
    let task = document.createElement("li");
    task.innerHTML = taskInput.value;
    task.classList.add("tarefa-criada");
    toDoList.appendChild(task);
    taskInput.value = "";
});

toDoList.addEventListener("click", function(event){
    let selectedTask = event.target;
    if(previousSelected.length > 0){
        previousSelected[0].classList.remove("selected");
            if(selectedTask.classList.contains("selected")){
            selectedTask.classList.remove("selected");
        } else{
            selectedTask.classList.add("selected");
        }
    }
    else{
        selectedTask.classList.add("selected");
    }
})

toDoList.addEventListener("dblclick", function(event){
    let selectedTask = event.target;
    if(selectedTask.classList.contains("completed")){
        selectedTask.classList.remove("completed");
    } else{
        selectedTask.classList.add("completed");
    }
})

resetAll.addEventListener("click", function(){
    while (toDoList.hasChildNodes()) {
        toDoList.removeChild(toDoList.lastChild);
    }
})

// while e hasChildNodes eram novos para mim, graças ao usuário Maurice Perry no stackoverflow, achei essa simples solução. segue o link : https://stackoverflow.com/questions/683366/remove-all-the-children-dom-elements-in-div;
// entendi mais sobre o while aqui https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while;
// o hasChildNodes é auto explicativo;
//usarei nos opcionais do projeto anterior

removeCompleted.addEventListener("click", function(){
    let completedTasks = toDoList.getElementsByClassName("completed");
    while (completedTasks[0]){
        completedTasks[0].parentNode.removeChild(completedTasks[0]);
    }
})
