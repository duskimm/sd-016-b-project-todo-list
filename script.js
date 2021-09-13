const task = document.querySelector('#criar-tarefa');
const list = document.querySelector('ol');
const apagar = document.querySelector('#apaga-tudo');
const apagarFinalizados = document.querySelector('#remover-finalizados');
const salvarTarefa = document.querySelector('#salvar-tarefas');
const buttonUp = document.querySelector('#mover-cima');
const buttonDown = document.querySelector('#mover-baixo');
const removeSelecionado = document.querySelector('#remover-selecionado');

task.addEventListener('click', () => {
  let capture = '';
  capture = document.querySelector('#texto-tarefa');
  const li = document.createElement('li');
  document.querySelector('#lista-tarefas').appendChild(li);
  li.innerHTML = capture.value;
  capture.value = '';
});

list.addEventListener('click', (evento) => {
  const event = evento.target;
  const li = document.getElementsByTagName('li');
  for (let index = 0; index < li.length; index += 1) {
    li[index].classList.remove('select');
  }
  event.classList.add('select');
});

