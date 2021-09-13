let botaoAdicionar = document.getElementById('criar-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');
let botaoLimpar = document.getElementById('apaga-tudo');
let botaoRemover = document.getElementById('remover-finalizados');

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
    for (let index = 0; index < listaTarefas.children.length; index++) {
      listaTarefas.children[index].style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  })
}

function setCompleted() {
  listaTarefas.addEventListener('dblclick', function(event) {

    if ((event.target.className) == '') {
      event.target.classList.add('completed');
    } else event.target.className = ('');
  })
}

function clearList() {
  botaoLimpar.addEventListener('click', function() {
    for (let index = 0; index < listaTarefas.children.length; index = 0) {
      listaTarefas.children[index].remove();
    }
  })
}

function removeCompleteds() {
  botaoRemover.addEventListener('click', function() {
    for (let index = 0; index < listaTarefas.children.length; index++) {
      if (listaTarefas.children[index].className == 'completed') {
        listaTarefas.children[index].remove();
      }

      for (let index = 0; index < listaTarefas.children.length; index++) {
        if (listaTarefas.children[index].className == 'completed') {
          listaTarefas.children[index].remove();
        }
      }
    }
  })
}

createTask();
setBackGround();
setCompleted();
clearList();
removeCompleteds()