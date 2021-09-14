const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerText = input.value;
  ol.appendChild(li);
  input.value = '';
});