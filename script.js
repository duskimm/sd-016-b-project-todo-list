function addTarefa() {
  if (document.querySelector('#texto-tarefa').value.length > 0) {
    let li = document.createElement('li');
    li.innerText = document.querySelector('#texto-tarefa').value;
    document.querySelector('#texto-tarefa').value = '';
    li.classList.add('tarefa');
    li.onclick = selecionar;
    li.ondblclick = riscar;
    document.querySelector('#lista-tarefas').appendChild(li);
  }
}

//  5-8 Habilita seleção
function selecionar(e) {
  if (document.querySelector('.selecionado')) {
    document.querySelector('.selecionado').classList.remove('selecionado');
  }
  e.target.classList.add('selecionado');
}

//  9 Habilita riscar tarefa
function riscar(e) {
  if ( e.target.classList.contains('completed')) {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
}

//  10 Habilita apagar tudo
function limparLista() {
  while (document.querySelector('.tarefa')) {
    document.querySelector('.tarefa').remove();
  }
}

//  11 Habilita apagar tarefas resolvidas (.completed)
function limparCompletos() {
  while (document.querySelector('.completed')) {
    document.querySelector('.completed').remove();
  }
}

//  14 Habilita remover selecionado
function removeSelecionado() {
  while (document.querySelector('.selecionado')) {
    document.querySelector('.selecionado').remove();
  }
}

//  Configurar a página
function configurar() {
  document.querySelector('#criar-tarefa').addEventListener('click', addTarefa);
  document.querySelector('#apaga-tudo').addEventListener('click', limparLista);
  document.querySelector('#remover-finalizados').addEventListener('click', limparCompletos);
  document.querySelector('#remover-selecionado').addEventListener('click', removeSelecionado);
}

window.onload = configurar;

// Linter, você está feliz?
