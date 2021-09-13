const listaOrdenada = document.getElementById('lista-tarefas');
const textoTarefa = document.getElementById('texto-tarefa');
const btnCriaTarefa = document.getElementById('criar-tarefa');

const pegaListaTarefas = localStorage.getItem('tarefas');
const tarefas = pegaListaTarefas === null ? [] : pegaListaTarefas.split(',');

const corLinhaPadrao = 'rgb(255, 255, 255)';

function capturaTextoTarefa() {
  console.log(textoTarefa.value);
  const tarefa = textoTarefa.value;
  return tarefa;
}
textoTarefa.addEventListener('change', capturaTextoTarefa);

function adicionaTarefa() {
  tarefas.push(capturaTextoTarefa());
  localStorage.setItem('tarefas', tarefas);
  window.location.reload(true);
}
btnCriaTarefa.addEventListener('click', adicionaTarefa);

function listaTarefas(tasks) {
  if (tarefas.length > 0) {
    for (let index = 0; index < tasks.length; index += 1) {
      const novaLinha = document.createElement('li');
      novaLinha.classList.add('line');
      novaLinha.style.backgroundColor = corLinhaPadrao;
      novaLinha.innerText = tasks[index];
      listaOrdenada.append(novaLinha);
    }
  }
}
listaTarefas(tarefas);

const linhas = document.querySelectorAll('.line');

function selecionaLinha(event) {
  const selecionado = event.target.style;
  if (selecionado.backgroundColor === corLinhaPadrao) {
    selecionado.backgroundColor = 'rgb(128,128,128)';
  } else {
    selecionado.backgroundColor = corLinhaPadrao;
  }
}

for (let index = 0; index < linhas.length; index += 1) {
  linhas[index].addEventListener('click', selecionaLinha);
}
