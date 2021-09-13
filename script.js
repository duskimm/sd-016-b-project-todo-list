/* ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo */

let botaoCriarTarefa = document.getElementById('criar-tarefa');
botaoCriarTarefa.onclick = function () {
  let lista = document.getElementById('lista-tarefas');
  let novaTarefa = document.createElement('li');
  let textoInput = document.getElementById('texto-tarefa').value;
  novaTarefa.innerText = textoInput;
  lista.appendChild(novaTarefa);
  document.getElementById('texto-tarefa').value = '';
};
