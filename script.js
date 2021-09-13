// 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128).
function eventoLista(li) {
  li.addEventListener('click', (elemento) => {
    const itemSelected = document.querySelector('.selected');
    if (itemSelected !== null) {
      itemSelected.classList.remove('selected');
    }

    elemento.target.classList.add('selected');
  });
}

// 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.
const buttonAdicionar = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');

buttonAdicionar.addEventListener('click', () => {
  const textTarefa = document.getElementById('texto-tarefa');
  if (textTarefa.value !== '') {
    const li = document.createElement('li');
    li.innerText = textTarefa.value;
    li.classList.add('listItem');
    ol.appendChild(li);

    textTarefa.value = '';
    textTarefa.focus();

    eventoLista(li);
  } else {
    alert('A tarefa precisa ser preenchida');
    textTarefa.focus();
  }
});
