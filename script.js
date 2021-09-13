const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const ol = document.getElementById('lista-tarefas');
const listTask = document.getElementsByTagName('li');
button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerText = input.value;
  ol.appendChild(li);
  input.value = '';
});

ol.addEventListener('click', (event) => {
  const evento = event.target;
  for (let index = 0; index < listTask.length; index += 1) {
    listTask[index].style.backgroundColor = 'white';
  }
  evento.style.backgroundColor = 'rgb(128, 128, 128)';
});

ol.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});
