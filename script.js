// Botão que adicionar o texto do input na lista
function adicionarLista () {
  let texto = document.querySelector('#texto-tarefa');
  let listaOrdenada = document.querySelector('#lista-tarefas');
  let criandoLi = document.createElement('li');
  criandoLi.innerText = texto.value;
  listaOrdenada.appendChild(criandoLi);
  texto.value = '';
}

let botao = document.querySelector('#criar-tarefa');
let textoAdicionado = botao.addEventListener('click', adicionarLista);

