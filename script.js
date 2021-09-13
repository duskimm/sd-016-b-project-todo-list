let botaoAdicionar = document.getElementById('criar-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');

function createTask() {
  botaoAdicionar.addEventListener('click', function() {
    let newItem = document.createElement('li');
    newItem.innerText = document.getElementById('texto-tarefa').value;
    document.getElementById('texto-tarefa').value = '';
    listaTarefas.appendChild(newItem);
  })
}

function setBackGround() {
  listaTarefas.addEventListener('click', function(event) {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  })
}


createTask();
setBackGround();