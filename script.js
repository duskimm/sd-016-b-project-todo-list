function addItemList() {
  const localizaOl = document.getElementById('lista-tarefas');
  const localizaButton = document.getElementById('criar-tarefa');

  localizaButton.addEventListener('click', () => {
    const criaLi = document.createElement('li');
    const localizaInput = document.getElementById('texto-tarefa');
    criaLi.innerText = localizaInput.value;
    localizaOl.appendChild(criaLi);
    localizaInput.value = '';
  });
}
addItemList();
