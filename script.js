const sel = '.selecionado';

//  7-8 Habilita seleção
function selecionar(e) {
  const s = 'selecionado'; // resolve o linter
  if (document.querySelector(sel)) {
    document.querySelector(sel).classList.remove(s);
  }
  e.target.classList.add(s);
}

//  9 Habilita riscar tarefa
function riscar(e) {
  if (e.target.classList.contains('completed')) {
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
  while (document.querySelector(sel)) {
    document.querySelector(sel).remove();
  }
}

//  5-6 Habilita adicionar tarefa
function addTarefa() {
  const texto = document.querySelector('#texto-tarefa');
  if (texto.value.length > 0) {
    const li = document.createElement('li');
    li.innerText = texto.value;
    texto.value = '';
    li.classList.add('tarefa');
    li.onclick = selecionar;
    li.ondblclick = riscar;
    document.querySelector('#lista-tarefas').appendChild(li);
  }
}

//  12 Habilita salvar tarefas
function salvarTarefas() {
  const lista = document.getElementsByClassName('tarefa');
  const l = {};
  for (let i = 0; i < lista.length; i += 1) {
    l[lista[i].innerText] = lista[i].classList.value;
  }

  // for (let i of lista) l[i.innerText] = i.classList.value; //lint não permitiu
  localStorage.setItem('tarefas', JSON.stringify(l));
}

function addTarefaRec(t, c) {
  const li = document.createElement('li');
  li.innerText = t;
  const c0 = c.split(' ');
  for (let i = 0; i < c0.length; i += 1) li.classList.add(c0[i]);
  li.onclick = selecionar;
  li.ondblclick = riscar;
  document.querySelector('#lista-tarefas').appendChild(li);
}

function carregar() {
  if (localStorage.getItem('tarefas')) {
    const o = JSON.parse(localStorage.getItem('tarefas'));
    const t = Object.keys(o);
    for (let i = 0; i < t.length; i += 1) addTarefaRec(t[i], o[t[i]]);
  }
}

//  13 Habilita reordenar
function trocarElemento(ac, bc) {
  const a = ac; // necessario pelo linter
  const b = bc; // idem
  const texto = a.innerText;
  const classes = a.classList.value;
  a.innerText = b.innerText;
  a.classList = b.classList;
  b.innerText = texto;
  b.classList.value = classes;
}

function movePraCima() {
  if (document.querySelector(sel)) {
    const movendo = document.querySelector(sel);
    const anterior = movendo.previousSibling;
    if (anterior) trocarElemento(movendo, anterior);
  }
}

function movePraBaixo() {
  if (document.querySelector(sel)) {
    const movendo = document.querySelector(sel);
    const proximo = movendo.nextSibling;
    if (proximo) trocarElemento(movendo, proximo);
  }
}

//  Configurar a página
function configurar() {
  document.querySelector('#criar-tarefa').addEventListener('click', addTarefa);
  document.querySelector('#apaga-tudo').addEventListener('click', limparLista);
  document.querySelector('#remover-finalizados').addEventListener('click', limparCompletos);
  document.querySelector('#salvar-tarefas').addEventListener('click', salvarTarefas);
  document.querySelector('#mover-cima').addEventListener('click', movePraCima);
  document.querySelector('#mover-baixo').addEventListener('click', movePraBaixo);
  document.querySelector('#remover-selecionado').addEventListener('click', removeSelecionado);
  carregar();
}

window.onload = configurar;

// Linter, você está feliz?
