console.log('vamo q vamo');
function createListItem() {
  const valorInput = document.getElementById('texto-tarefa');
  let orderedList = document.getElementById('lista-tarefas');
  let p = document.createElement('li');
  orderedList.appendChild(p).innerText = valorInput.value;
}

const submitButton = document.getElementById('criar-tarefa');
submitButton.addEventListener('click', createListItem);