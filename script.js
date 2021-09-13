const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
button.addEventListener('click', () => {
  const ol = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  li.innerText = input.value;
  ol.appendChild(li);
  input.value = '';
});
