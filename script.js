const textoInput = document.getElementById('texto-tarefa');
const valorButao = document.getElementById('criar-tarefa');
const listaDeItens = document.getElementById('lista-tarefas');

valorButao.addEventListener('click', () => {
  const elementoLista = document.createElement('li');
  const texto = textoInput.value;
  listaDeItens.appendChild(elementoLista);
  elementoLista.innerText = texto;
  textoInput.value = '';
});
