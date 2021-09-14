const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const ol = document.getElementById('lista-tarefas');
const listTask = document.getElementsByTagName('li');
const buttonClear = document.getElementById('apaga-tudo');
const buttonRemove = document.getElementById('remover-finalizados');
const buttonSalved = document.getElementById('salvar-tarefas');
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

buttonClear.addEventListener('click', () => {
  const removeLi = document.querySelectorAll('li');
  for (let index = 0; index < removeLi.length; index += 1) {
    removeLi[index].remove();
  }
});

buttonRemove.addEventListener('click', () => {
  const removeLi = document.querySelectorAll('li');
  for (let index = 0; index < removeLi.length; index += 1) {
    if (removeLi[index].classList.contains('completed')) {
      removeLi[index].remove();
    }
  }
});

buttonSalved.addEventListener('click', () => {
  localStorage.setItem('tarefas', ol.innerHTML);
});

window.onload = function saved() {
  ol.innerHTML = localStorage.getItem('tarefas');
};
