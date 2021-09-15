const buttonList = document.getElementById('criar-tarefa');
const textInput = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const apagador = document.getElementById('apaga-tudo');

function aleteraCorDeFundo() {
  const li = listaTarefas.childNodes;
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].className === 'itemStyle') {
      li[index].className = 'styleItem';
    } else if (li[index].className === 'styleItem') {
      li[index].className = 'itemStyle';
    }
  }
}

function tarefaFeita() {
  const riscaLi = listaTarefas.childNodes;
  for (let index = 0; index < riscaLi.length; index += 1) {
    if (riscaLi[index].className !== 'completed') {
      riscaLi[index].className = 'completed';
    } else {
      riscaLi[index].className = 'styleItem';
    }
  }
}

function novoItemList() {
  const novoItem = document.createElement('li');
  novoItem.addEventListener('click', aleteraCorDeFundo);
  novoItem.addEventListener('dblclick', tarefaFeita);

  novoItem.innerHTML = textInput.value;
  novoItem.className = 'itemStyle';
  textInput.value = '';
  listaTarefas.appendChild(novoItem);
}
buttonList.addEventListener('click', novoItemList);

function armazenaItem() {
  const listaOl = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('saved', listaOl);
}
armazenaItem();

function apagaTudo() {
  listaTarefas.innerHTML = '';
}

apagador.addEventListener('click', apagaTudo);
