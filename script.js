const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const orderedList = document.getElementById('lista-tarefas');

// Adicionar tarefa na lista
button.addEventListener('click', function () {
  const task = input.value;
  if (task.length > 0) {
    const li = document.createElement('li');
    orderedList.appendChild(li);
    li.innerHTML = task;
    input.value = '';
  }
});
