const getInput = document.getElementById('texto-tarefa');
const getButton = document.getElementById('criar-tarefa');
const getOrderlist = document.getElementById('lista-tarefas');

getButton.addEventListener('click', function () {
  const criali = document.createElement('li');
  criali.innerHTML = getInput.value;
  getOrderlist.appendChild(criali);
  getInput.value = '';
})