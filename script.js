window.onload = function () {

    // Requisito 5

    let inputText = document.getElementById("texto-tarefa");
    let createTaskButton = document.getElementById("criar-tarefa");
    let taskList = document.getElementById("lista-tarefas");

    createTaskButton.addEventListener("click", function () {
        let text = document.createElement("li");
        text.innerText = inputText.value;
        taskList.appendChild(text);
        inputText.value = "";
    })
}
