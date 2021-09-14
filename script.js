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

    // Requisito 6

    let listItens = document.getElementsByClassName("tarefa");

    document.addEventListener("click", function(event){
        if (event.target.classList.contains("tarefa")) {
            for (let i = 0; i < listItens.length; i ++) {
                listItens[i].classList.remove("selected");
            }
            event.target.classList.add("selected");
        }
    })
}
