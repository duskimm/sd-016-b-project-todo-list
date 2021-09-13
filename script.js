// 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.
let buttonAdicionar = document.getElementById('criar-tarefa');
let ol = document.getElementById('lista-tarefas');

buttonAdicionar.addEventListener('click', () => {
  let textTarefa = document.getElementById('texto-tarefa');
  if (textTarefa.value !== '') {
    let li = document.createElement('li');
    li.innerText = textTarefa.value;
    ol.appendChild(li);

    textTarefa.value = '';
    textTarefa.focus();
  } else {
    alert('A tarefa precisa ser preenchida');
    textTarefa.focus();
  }
});
