const listaOrdenada = document.getElementById('lista-tarefas');
const textoTarefa = document.getElementById('texto-tarefa');
const btnCriaTarefa = document.getElementById('criar-tarefa');
const btnApagaTudo = document.getElementById('apaga-tudo');
const btnRemoverFinalizados = document.getElementById('remover-finalizados');

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

function marcarTarefaConcluida(event) {
  const selecionado = event.target;
  if (selecionado.classList.contains('completed')) {
    selecionado.classList.remove('completed');
  } else {
    selecionado.classList.add('completed');
  }
}

for (let index = 0; index < linhas.length; index += 1) {
  linhas[index].addEventListener('click', selecionaLinha);
  linhas[index].addEventListener('dblclick', marcarTarefaConcluida);
}

function deletaLista() {
  localStorage.removeItem('tarefas');
  window.location.reload(true);
}
btnApagaTudo.addEventListener('click', deletaLista);

function removerTarefasFinalizadas() {
  const novaLista = [];
  for (let index = 0; index < linhas.length; index += 1) {
    if (linhas[index].classList.contains('completed')) {
      listaOrdenada.removeChild(linhas[index]);
    } else {
      novaLista.push(linhas[index].innerText);
    }
  }
  localStorage.setItem('tarefas', novaLista);
}
btnRemoverFinalizados.addEventListener('click', removerTarefasFinalizadas);
