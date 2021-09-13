window.onload = function () {
    setupCreateTaskButton();
}

function setupCreateTaskButton() {
    const button = document.querySelector("#criar-tarefa");
    const input = document.querySelector("#texto-tarefa");

    button.addEventListener('click', function (event) {
        addListItem(input.value);
        input.value = '';
    })
}

function addListItem(text) {
    const list = document.querySelector("#lista-tarefas");

    const newItem = document.createElement('li');
    newItem.innerText = text;

    list.appendChild(newItem);
}
