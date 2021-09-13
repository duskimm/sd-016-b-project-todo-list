function criarTarefa() {
  const inputText = document.querySelector('#texto-tarefa').value;
  const listaTarefa = document.querySelector('#lista-tarefas');
  const newLi = document.createElement('li');
  newLi.innerText = inputText;
  listaTarefa.appendChild(newLi);
  document.querySelector('#texto-tarefa').value = '';
}

function bgGray(event) {
  const eventTarget = event.target;
  const bgGraySelector = document.getElementsByClassName('bgCinza');
  if (bgGraySelector.length > 0) {
    bgGraySelector[0].style.backgroundColor = '#7986ac';
    bgGraySelector[0].classList.remove('bgCinza');
    eventTarget.className = 'bgCinza';
    bgGraySelector[0].style.backgroundColor = 'rgb(128, 128, 128';
  } else {
    eventTarget.className = 'bgCinza';
    bgGraySelector[0].style.backgroundColor = 'rgb(128, 128, 128';
  }
}

const btnCriarTarefa = document.querySelector('#criar-tarefa');
btnCriarTarefa.addEventListener('click', criarTarefa);
const olLi = document.querySelector('#lista-tarefas');
olLi.addEventListener('click', bgGray);
