const cabecalho = document.createElement('header');
const h1 = document.createElement('h1');
const p = document.createElement('p');
const input = document.createElement('input');
const ol = document.createElement('ol');
const button = document.createElement('button');
const buttonClear = document.createElement('button');
const buttonRemove = document.createElement('button');


document.body.appendChild(cabecalho);
cabecalho.appendChild(h1);
h1.innerText = 'Minha Lista de Tarefas';
document.body.appendChild(p);
p.id = 'funcionamento';
p.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
document.body.appendChild(input);
input.id = 'texto-tarefa';
input.placeholder = 'Digite aqui sua tarefa';
input.type = 'text';
document.body.appendChild(ol);
ol.id = 'lista-tarefas';
document.body.appendChild(button);
button.id = 'criar-tarefa';
button.innerText = 'Adicionar';
document.body.appendChild(buttonClear);
document.body.appendChild(buttonRemove);
buttonClear.innerText = 'Apagar';
buttonRemove.innerText = 'Remover';


/* adicionar tarefas */
function addButton() {
    let entrada = document.getElementById('texto-tarefa');
    let input = entrada.value;
    let ordernedList = document.getElementById('lista-tarefas');
    let listaCriada = document.createElement('li');
    listaCriada.innerHTML = input;
    ordernedList.appendChild(listaCriada);
    document.getElementById('texto-tarefa').value = '';
}
button.addEventListener('click', addButton);

/* remove todas as tarefas */
function remButton() {
    let list = document.getElementById('lista-tarefas');
    list.innerHTML = '';
}
buttonRemove.addEventListener('click', remButton);

/* mudar background color quando selecionado */
const list = document.getElementById('lista-tarefas');
function changeBg (event) {
    let selecionado = document.querySelector('.item-list');
    if (selecionado && selecionado !== event.target) {
        selecionado.classList.remove('item-list');
    }
    event.target.classList.toggle('item-list');
}
list.addEventListener('click', changeBg);
