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
  const corCinza = document.querySelector('.corCinza');
  if (corCinza !== null) {
    event.target.classList.toggle('corCinza');
    corCinza.classList.remove('corCinza');
    event.target.classList.toggle('corCinza');
  }
  event.target.classList.toggle('corCinza');
});

listaDeItens.addEventListener('dblclick', (event) => {
  const riscado = document.querySelector('.completed');
  if (riscado !== null) {
    event.target.classList.toggle('completed');
    riscado.classList.remove('completed');
    event.target.classList.toggle('completed');
  }
  event.target.classList.toggle('completed');
});
