// Botão que adicionar o texto do input na lista
function adicionarLista () {
  let texto = document.querySelector('#texto-tarefa');
  let listaOrdenada = document.querySelector('#lista-tarefas');
  let criandoLi = document.createElement('li');
  criandoLi.innerText = texto.value;
  criandoLi.className = "tarefa";
  listaOrdenada.appendChild(criandoLi);
  texto.value = '';
}

let botao = document.querySelector('#criar-tarefa');
let textoAdicionado = botao.addEventListener('click', adicionarLista);

// requisito 7 e 8 - só um li pode ser selecionado por vez
let listaOrdenada = document.querySelector('#lista-tarefas');
let itensLista = document.querySelectorAll('.tarefa');

window.onclick = function(event) {
  if (event.target.classList.contains('tarefa')) {
    let itensLista = document.querySelectorAll('.tarefa');
    for (let index = 0; index < itensLista.length; index += 1) {
      itensLista[index].style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'rgb(' + 128 + ', ' + 128 + ', ' + 128 + ')';
  }
};
