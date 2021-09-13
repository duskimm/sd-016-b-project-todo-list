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

// Adicionando backgroud na lista selecionada
window.onclick = function(event) {
  if (event.target.classList.contains('tarefa')) {
    // console.log('Cor selecionada: ' + recuperaCorAlvo(event));
    // let corAlvo = recuperaCorAlvo(event);
    event.target.style.backgroundColor = 'rgb(' + 128 + ', ' + 128 + ', ' + 128 + ')';
  }
  // console.log(event.target.className);
};
