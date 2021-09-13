const addButton = document.getElementById('criar-tarefa');
const addListOl = document.getElementById('lista-tarefas');
const addInput = document.getElementById('texto-tarefa');

addButton.addEventListener('click', function() {
  const createLi = document.createElement('li');
  createLi.innerText = addInput.value;
  addListOl.appendChild(createLi);
  addInput.value = "";
});
