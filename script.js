const localInput = document.querySelector('#localInput');
const localLista = document.querySelector('#localLista');
const localMover = document.querySelector('#localMover');
const localRemover = document.querySelector('#localRemover');

// Criando o Input de Tarefas

const inputElemento = document.createElement('input');
inputElemento.id = 'texto-tarefa';
localInput.appendChild(inputElemento);

// Criando a lita Ordenada

const listaNOrdenada = document.createElement('ol');
listaNOrdenada.id = 'lista-tarefas';
listaNOrdenada.innerHTML = localStorage.getItem('listaSalva');
localLista.appendChild(listaNOrdenada);

// Funcao para salvar todas as listas

function salvandoLista() {
  const listaCompleta = listaNOrdenada.innerHTML;
  localStorage.setItem('listaSalva', listaCompleta);
}

// Removendo todos os selecionados

function removerSelecionado() {
  const todasAsLi = document.querySelectorAll('.create-tarefa');
  for (let i = 0; i < todasAsLi.length; i += 1) {
    todasAsLi[i].classList.remove('selecionado');
  }
}

// Selecionando Item

function selecionarItem(event) {
  const liSelecionada = event.target;
  removerSelecionado();
  liSelecionada.classList.add('selecionado');
}

// Riscando com dbClick

function dbClickRiscando(event) {
  const liSelecionada = event.target;

  if (liSelecionada.classList.contains('completed') === true) {
    liSelecionada.classList.remove('completed');
    liSelecionada.style.textDecoration = '';
  } else {
    liSelecionada.classList.add('completed');
  }
}

// Criando button de Criar Tarefas

const buttonCriarTarefa = document.createElement('button');
buttonCriarTarefa.id = 'criar-tarefa';
buttonCriarTarefa.innerText = 'Criar Tarefa';
localInput.appendChild(buttonCriarTarefa);
buttonCriarTarefa.addEventListener('click', () => {
  const liCriada = document.createElement('li');
  liCriada.innerText = inputElemento.value;
  liCriada.className = 'create-tarefa';
  inputElemento.value = '';
  listaNOrdenada.appendChild(liCriada);
  liCriada.addEventListener('click', selecionarItem);
  liCriada.addEventListener('dblclick', dbClickRiscando);
});

// Criando button de remover todos

const buttoRemoverTudo = document.createElement('button');
buttoRemoverTudo.id = 'apaga-tudo';
buttoRemoverTudo.innerText = 'Apagar tudo';
localRemover.appendChild(buttoRemoverTudo);
buttoRemoverTudo.addEventListener('click', () => {
  listaNOrdenada.innerHTML = '';
});

// Criando button de remover selecionados

const buttoRemoverSelecionado = document.createElement('button');
buttoRemoverSelecionado.id = 'remover-finalizados';
buttoRemoverSelecionado.innerText = 'Remover Finalizados';
localRemover.appendChild(buttoRemoverSelecionado);
buttoRemoverSelecionado.addEventListener('click', () => {
  const todosFianlizados = document.querySelectorAll('.completed');
  for (let i = 0; i < todosFianlizados.length; i += 1) {
    listaNOrdenada.removeChild(todosFianlizados[i]);
  }
});

// Criando button de salvar tarefas

const buttonSalvarTarefas = document.createElement('button');
buttonSalvarTarefas.id = 'salvar-tarefas';
buttonSalvarTarefas.innerText = 'Salvar Tarefas';
localRemover.appendChild(buttonSalvarTarefas);
buttonSalvarTarefas.addEventListener('click', salvandoLista);

// Criando button de remover selecionados

const buttonRemoverSelecionados = document.createElement('button');
buttonRemoverSelecionados.id = 'remover-selecionado';
buttonRemoverSelecionados.innerText = 'Remover Selecionados';
localRemover.appendChild(buttonRemoverSelecionados);
buttonRemoverSelecionados.addEventListener('click', () => {
  const selecionado = document.querySelector('.selecionado');
  listaNOrdenada.removeChild(selecionado);
});

function getSelected() {
  const selecte = document.querySelector('.selecionado');
  return selecte;
}

// Criando button mover para cima

const buttonMoverParaCima = document.createElement('button');
buttonMoverParaCima.id = 'mover-cima';
buttonMoverParaCima.innerText = 'Mover para cima';
localMover.appendChild(buttonMoverParaCima);
buttonMoverParaCima.addEventListener('click', () => {
  const selecte = getSelected();
  if (selecte === null) {
    return;
  }
  const proximo = selecte.previousElementSibling;
  if (proximo === null) {
    return;
  }
  const selectetext = selecte.innerHTML;
  const proximoText = proximo.innerHTML;
  const selecteClass = selecte.className;
  const proximoClass = proximo.className;
  selecte.innerHTML = proximoText;
  proximo.innerHTML = selectetext;
  selecte.className = proximoClass;
  proximo.className = selecteClass;
});

// Criando button mover para baixo

const buttonMoverParaBaixo = document.createElement('button');
buttonMoverParaBaixo.id = 'mover-baixo';
buttonMoverParaBaixo.innerText = 'Mover para Baixo';
localMover.appendChild(buttonMoverParaBaixo);
buttonMoverParaBaixo.addEventListener('click', () => {
  const selecte = getSelected();
  if (selecte === null) {
    return;
  }
  const proximo = selecte.nextElementSibling;
  if (proximo === null) {
    return;
  }
  const selectetext = selecte.innerHTML;
  const proximoText = proximo.innerHTML;
  const selecteClass = selecte.className;
  const proximoClass = proximo.className;
  selecte.innerHTML = proximoText;
  proximo.innerHTML = selectetext;
  selecte.className = proximoClass;
  proximo.className = selecteClass;
});

// Adicionando eventos

function adicionadoEventosNasLi() {
  const todasAsLi = document.querySelectorAll('.create-tarefa');
  for (let i = 0; i < todasAsLi.length; i += 1) {
    todasAsLi[i].addEventListener('click', selecionarItem);
    todasAsLi[i].addEventListener('dblclick', dbClickRiscando);
  }
}

adicionadoEventosNasLi();
