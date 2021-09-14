const listaTarefa = document.querySelector('#lista-tarefas');

function criarTarefa() {
  const inputText = document.querySelector('#texto-tarefa').value;
  const newLi = document.createElement('li');
  newLi.innerText = inputText;
  listaTarefa.appendChild(newLi);
  document.querySelector('#texto-tarefa').value = '';
}

function completedClass(evento) {
  const eventoTarget = evento.target;
  if (eventoTarget.classList.contains('completed')) {
    eventoTarget.classList.remove('completed');
  } else {
    eventoTarget.classList.add('completed');
  }
}

function bgGray(event) {
  const eventTarget = event.target;
  const bgGraySelector = document.getElementsByClassName('bgCinza');
  if (eventTarget !== listaTarefa) {
    if (bgGraySelector.length > 0) {
      bgGraySelector[0].style.backgroundColor = '#c2bfaf';
      bgGraySelector[0].classList.remove('bgCinza');
      eventTarget.classList.add('bgCinza');
      bgGraySelector[0].style.backgroundColor = 'rgb(128, 128, 128';
    } else {
      eventTarget.classList.add('bgCinza');
      bgGraySelector[0].style.backgroundColor = 'rgb(128, 128, 128';
    }
  }
}

const btnCriarTarefa = document.querySelector('#criar-tarefa');
btnCriarTarefa.addEventListener('click', criarTarefa);

listaTarefa.addEventListener('click', bgGray);
const olLi2 = document.querySelector('.div_lista-tarefas');
olLi2.addEventListener('dblclick', completedClass);
// se estiver selecionado, deselecione
