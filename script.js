// Adiciona li a lista de tarefas
function addLi() {
  const inputText = document.getElementById('texto-tarefa').value;
  
  
  if (inputText !== '') {
    const li = document.createElement('li');
    const list = document.getElementById('lista-tarefas');
    li.classList.add('list-iten');
    li.innerText = inputText;
    list.appendChild(li);
  }
}

// Remove o valor de input
const button = document.getElementById('criar-tarefa');

function removeValueInput() {
  const inputText = document.getElementById('texto-tarefa');
  inputText.value = '';
}
































window.onload = function page() {
  const buttonAdd = document.querySelector('#criar-tarefa');
  buttonAdd.addEventListener('click', addLi);
  buttonAdd.addEventListener('click', removeValueInput);
}