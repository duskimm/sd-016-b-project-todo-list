const listaOrdenada = document.getElementById('lista-tarefas');
const textoTarefa = document.getElementById('texto-tarefa');
const btnCriaTarefa = document.getElementById('criar-tarefa');
const btnApagaTudo = document.getElementById('apaga-tudo');
const btnRemoverFinalizados = document.getElementById('remover-finalizados');
const btnRemoverSelecionado = document.getElementById('remover-selecionado');
const btnSalvarTarefas = document.getElementById('salvar-tarefas');
const btnMoverCima = document.getElementById('mover-cima');
const btnMoverBaixo = document.getElementById('mover-baixo');

const pegaListaTarefas = localStorage.getItem('tarefas');
const tarefas = pegaListaTarefas === null ? [] : pegaListaTarefas.split(',');

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
      novaLinha.innerText = tasks[index];
      listaOrdenada.append(novaLinha);
    }
  }
}
listaTarefas(tarefas);

if (localStorage.getItem('tarefasHtml') != null) {
  listaOrdenada.innerHTML = localStorage.getItem('tarefasHtml');
}

const linhas = document.querySelectorAll('.line');

function limpaSelecionadas() {
  for (let index = 0; index < linhas.length; index += 1) {
    if (linhas[index].classList.contains('selected')) {
      linhas[index].classList.remove('selected');
    }
  }
}

function selecionaLinha(event) {
  const selecionado = event.target.classList;
  limpaSelecionadas();
  if (selecionado.contains('selected')) {
    selecionado.remove('selected');
  } else {
    selecionado.add('selected');
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
  localStorage.removeItem('tarefasHtml');
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
  const newArray = [];
  for (let index = 0; index < linhas.length; index += 1) {
    if (linhas[index].classList.contains('selected')) {
      linhas[index].remove();
    } else {
      newArray.push(linhas[index].innerText);
    }
  }
  localStorage.setItem('tarefas', newArray);
}
btnRemoverSelecionado.addEventListener('click', deletaSelecionado);

function salvarListaDeTarefas() {
  console.log(listaOrdenada.innerHTML);
  localStorage.setItem('tarefasHtml', listaOrdenada.innerHTML);
}
btnSalvarTarefas.addEventListener('click', salvarListaDeTarefas);

function moverCima() {
  const li = listaOrdenada.children;
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].previousElementSibling && li[index].classList.contains('selected')) {
      li[index].parentNode.insertBefore(li[index], li[index].previousElementSibling);
    }
  }
}
btnMoverCima.addEventListener('click', moverCima);

function moverBaixo() {
  const li = listaOrdenada.children;
  let liSelecionada = '';
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('selected')) {
      liSelecionada = li[index];
    }
  }
  if (liSelecionada.nextElementSibling) {
    liSelecionada.parentNode.insertBefore(liSelecionada.nextElementSibling, liSelecionada);
  }
}
btnMoverBaixo.addEventListener('click', moverBaixo);
