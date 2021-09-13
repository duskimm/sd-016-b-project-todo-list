const doubleClickText = document.createElement('p');
doubleClickText.setAttribute('id', 'funcionamento');
doubleClickText.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
document.body.appendChild(doubleClickText);

const adicionaALista = document.createElement('input');
adicionaALista.setAttribute('id', 'texto-tarefa');
document.body.appendChild(adicionaALista);

const listaDeTarefas = document.createElement('ol');
listaDeTarefas.setAttribute('id', 'lista-tarefas');
document.body.appendChild(listaDeTarefas);
