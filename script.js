window.onload = function () {

    // Requisito 5

    let inputText = document.getElementById("texto-tarefa");
    let createTaskButton = document.getElementById("criar-tarefa");
    let taskList = document.getElementById("lista-tarefas");

    createTaskButton.addEventListener("click", function () {
        let text = document.createElement("li");
        text.innerText = inputText.value;
        text.className = "tarefa";
        taskList.appendChild(text);
        inputText.value = "";
    })

    // Requisito 6, 7 e 8

    let listItens = document.getElementsByClassName("tarefa");

    document.addEventListener("click", function(event){
        if (event.target.classList.contains("tarefa")) {
            for (let i = 0; i < listItens.length; i ++) {
                listItens[i].classList.remove("selected");
            }
            event.target.classList.add("selected");
        }
    })

    // Requisito 9

    document.addEventListener("dblclick", function(event) {
        if (event.target.classList.contains("tarefa")) {
            if (event.target.classList.contains("completed")) {
                event.target.classList.remove("completed");
            } else {
                event.target.classList.add("completed");
            }
        }
    })

    // Requisito 10

    let buttonRemoveAll = document.getElementById("apaga-tudo");

    buttonRemoveAll.addEventListener("click", function(){
        taskList.innerHTML="";
    })

    // Requisito 11

    let buttonRemoveFinished = document.getElementById("remover-finalizados");
    
    buttonRemoveFinished.addEventListener("click", function(){
        let finishedTasks = document.querySelectorAll(".completed");
        for (let i = 0; i < finishedTasks.length; i ++) {
            taskList.removeChild(finishedTasks[i]);
            }
        })
}
