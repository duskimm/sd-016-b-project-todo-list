const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const ol = document.getElementById('lista-tarefas');
const listTask = document.getElementsByTagName('li');
const buttonClear = document.getElementById('apaga-tudo');
const buttonRemove = document.getElementById('remover-finalizados');
const buttonSalved = document.getElementById('salvar-tarefas');
const removeSelected = document.getElementById('remover-selecionado');
const buttonUp = document.getElementById('mover-cima');
const buttonDown = document.getElementById('mover-baixo');
button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerText = input.value;
  ol.appendChild(li);
  input.value = '';
});

input.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    const li = document.createElement('li');
    li.innerText = input.value;
    ol.appendChild(li);
    input.value = '';
  }
});

ol.addEventListener('click', (event) => {
  const evento = event.target;
  for (let index = 0; index < listTask.length; index += 1) {
    listTask[index].style.backgroundColor = 'white';
  }
  evento.style.backgroundColor = 'grey';
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

removeSelected.addEventListener('click', () => {
  const removeLi = document.querySelectorAll('li');
  for (let index = 0; index < removeLi.length; index += 1) {
    if (removeLi[index].style.backgroundColor === 'grey') {
      removeLi[index].remove();
    }
  }
});

buttonUp.addEventListener('click', () => {
  const selectedLi = document.querySelectorAll('li');
  for (let index = 0; index < selectedLi.length; index += 1) {
    if (selectedLi[index].style.backgroundColor === 'grey' && (index - 1) !== -1) {
      ol.insertBefore(selectedLi[index], selectedLi[index - 1]);
    }
  }
});

buttonDown.addEventListener('click', () => {
  const selecLi = document.querySelectorAll('li');
  for (let i = selecLi.length - 1; i >= 0; i -= 1) {
    if (selecLi[i].style.backgroundColor === 'grey' && (i + 1) !== selecLi.length) {
      ol.insertBefore(selecLi[i + 1], selecLi[i]);
    }
  }
});
