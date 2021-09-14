const textoInput = document.getElementById('texto-tarefa');
const valorButao = document.getElementById('criar-tarefa');
const listaDeItens = document.getElementById('lista-tarefas');
// const itensDaLista = document.getElementsByClassName('.itemLista');

valorButao.addEventListener('click', () => {
  const elementoLista = document.createElement('li');
  const texto = textoInput.value;
  listaDeItens.appendChild(elementoLista);
  elementoLista.innerText = texto;
  elementoLista.className = 'itemLista';
  textoInput.value = '';
});

listaDeItens.addEventListener('click', (event) => {
  event.target.classList.toggle('corCinza');
});
