const listaOrdenada = document.getElementById('lista-tarefas');
const textoTarefa = document.getElementById('texto-tarefa');
const btnCriaTarefa = document.getElementById('criar-tarefa');
const btnApagaTudo = document.getElementById('apaga-tudo');
const btnRemoverFinalizados = document.getElementById('remover-finalizados');
const btnRemoverSelecionado = document.getElementById('remover-selecionado');

const pegaListaTarefas = localStorage.getItem('tarefas');
const tarefas = pegaListaTarefas === null ? [] : pegaListaTarefas.split(',');

let count = 0;

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
      // novaLinha.style.backgroundColor = corLinhaPadrao;
      novaLinha.innerText = tasks[index];
      listaOrdenada.append(novaLinha);
    }
  }
}
listaTarefas(tarefas);

const linhas = document.querySelectorAll('.line');

function verificaQuantasLinhasSelecionadas() {

  for (let index = 0; index < linhas.length; index += 1) {
    if (linhas[index].classList.contains('selected')) {
      count = 1;
    }
  }
  return count;
}

function selecionaLinha(event) {
  const selecionado = event.target.classList;
  count = verificaQuantasLinhasSelecionadas();
  console.log(count);
  if (selecionado.contains('selected')) {
    selecionado.remove('selected');
    count -= 1;
  } else {
    if (count < 1) {
      selecionado.add('selected');
    }
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

function deletaSelecionado() {
  let newArray = [];
  for (let index = 0; index < linhas.length; index += 1) {
    if (linhas[index].classList.contains('selected')) {
      count = 0;
      linhas[index].remove();
    } else {
      newArray.push(linhas[index].innerText);
    }
  }
  localStorage.setItem('tarefas', newArray);
}
btnRemoverSelecionado.addEventListener('click', deletaSelecionado);
