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

// 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item.
function itemListCompleted(li) {
  li.addEventListener('dblclick', (elemento) => {
    const itemCompleted = elemento.target;
    if (itemCompleted.classList.contains('completed')) {
      itemCompleted.classList.remove('completed');
    } else {
      itemCompleted.classList.add('completed');
    }
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

    // Chama a função que cria o evento de um click.
    eventoLista(li);
    // Chama a função que cria o evento de double click.
    itemListCompleted(li);
  } else {
    alert('A tarefa precisa ser preenchida');
    textTarefa.focus();
  }
});

// 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista.
const btnApagarTudo = document.getElementById('apaga-tudo');
btnApagarTudo.addEventListener('click', () => {
  const li = document.getElementsByClassName('listItem');
  for (let index = li.length - 1; index >= 0; index -= 1) {
    li[index].remove();
  }
});

// 11 - Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista.
const removeCompleted = document.getElementById('remover-finalizados');
removeCompleted.addEventListener('click', () => {
  const itemCompleted = document.getElementsByClassName('completed');
  for (let index = itemCompleted.length - 1; index >= 0; index -= 1) {
    itemCompleted[index].remove();
  }
});

// 12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava.
// Evento que adiciona tarefas ao localStorage
const btnSalvarTarefas = document.getElementById('salvar-tarefas');
btnSalvarTarefas.addEventListener('click', () => {
  const li = document.getElementsByClassName('listItem');

  localStorage.removeItem('taskList');

  const objectList = {};
  for (let index = 0; index < li.length; index += 1) {
    const item = li[index];

    if (item.classList.contains('completed')) {
      objectList[item.innerText] = 'completed';
    } else {
      objectList[item.innerText] = 'noCompleted';
    }
  }
  localStorage.setItem('taskList', JSON.stringify(objectList));
});

// Função que cria uma lista a partir de um objeto. Normalmente vindo do localStorage.
function addListOfObject(objeto) {
  // Percorro o objeto.
  Object.keys(objeto).forEach((key) => {
    const li = document.createElement('li');
    li.innerText = key; // Pega a chave do objeto.
    li.classList.add('listItem');
    if (objeto[key] === 'completed') { // Compara o item (valor) do objeto.
      li.classList.add('completed');
    }
    ol.appendChild(li);

    // Chama a função que cria o evento de um click.
    eventoLista(li);
    // Chama a função que cria o evento de double click.
    itemListCompleted(li);
  });

  // A função Object.keys acima utilizada foi baseada no código do site stackoverflow LINK: https://pt.stackoverflow.com/questions/173293/como-percorrer-um-objeto-em-javascript feita por BrTkCa em 23.12.2016.
}

// Pega o objeto taskList do localStorage...
function lerLocalStorage() {
  const taskList = JSON.parse(localStorage.getItem('taskList'));
  if (taskList !== null) {
    addListOfObject(taskList);
  }
}

window.onload = lerLocalStorage;

// 13 - Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas.
const btnSubir = document.getElementById('mover-cima');
const btnDescer = document.getElementById('mover-baixo');

// Evento de subir tarefa
btnSubir.addEventListener('click', () => {
  const itemSelected = document.querySelector('.selected');
  if ((itemSelected) && (itemSelected !== ol.firstElementChild)) {
    ol.insertBefore(itemSelected, itemSelected.previousElementSibling);
  }
});

// Evento de descer tarefa
btnDescer.addEventListener('click', () => {
  const itemSelected = document.querySelector('.selected');
  if ((itemSelected) && (itemSelected !== ol.lastElementChild)) {
    // Aqui abaixo como a função insere antes tive que avançar para o próximo irmão duas vezes.
    ol.insertBefore(itemSelected, itemSelected.nextElementSibling.nextElementSibling);
  }
});

// 14 - Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado.
const btnRemoveSelected = document.getElementById('remover-selecionado');
btnRemoveSelected.addEventListener('click', () => {
  const itemSelected = document.querySelector('.selected');
  if (itemSelected !== null) {
    itemSelected.remove();
  }
});
