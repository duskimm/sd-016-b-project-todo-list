function addtask() {
  const createTask = document.getElementById('texto-tarefa').value;
  let list = document.getElementById('lista-tarefas').innerHTML;

  list += `<li>${createTask}</li>`;
  document.getElementById('lista-tarefas').innerHTML = list;
  document.getElementById('texto-tarefa').value = null;
}
addtask();

// indicação para tirar ideia do video: https://www.youtube.com/watch?v=pRwxgtqImZQ
// altera o fundo do texto clicado para cinza
const toGray = document.getElementById('lista-tarefas');
function changeColor(e) {
  const selectedItem = document.querySelectorAll('li');
  for (let index = 0; index < selectedItem.length; index += 1) {
    selectedItem[index].style.backgroundColor = '';
  }
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
toGray.addEventListener('click', changeColor);

// adiciona uma linha no meio do texto qunado clicado duas vezes
function lineThrough(e) {
  if (e.target.className === 'completed') {
    e.target.className = '';
  } else {
    e.target.className = 'completed';
  }
}
toGray.addEventListener('dblclick', lineThrough);

// limpa a lista de itens
const clearitens = document.getElementById('apaga-tudo');
function removeAll() {
  const deleteAll = document.querySelectorAll('li');
  if (deleteAll.length > 0) {
    for (let index = 0; index < deleteAll.length; index += 1) {
      deleteAll[index].remove();
    }
  }
}
clearitens.addEventListener('click', removeAll);

// remove todos os itens com a classe .completed
const removeFinishedItens = document.getElementById('remover-finalizados');
function removeLinedItem() {
  const completedTasks = document.querySelectorAll('.completed');
  console.log(completedTasks);
  if (completedTasks.length > 0) {
    for (let index = 0; index < completedTasks.length; index += 1) {
      completedTasks[index].remove();
    }
  }
}
removeFinishedItens.addEventListener('click', removeLinedItem);
