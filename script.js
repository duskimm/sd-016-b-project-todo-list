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
  const classeSelecionada = document.querySelector('.corCinza');
  if (classeSelecionada !== null) {
    event.target.classList.toggle('corCinza');
    classeSelecionada.classList.remove('corCinza');
    event.target.classList.toggle('corCinza');
  }
  
  event.target.classList.toggle('corCinza');
});
