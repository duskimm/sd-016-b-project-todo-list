const cabecalho = document.createElement('header');
const h1 = document.createElement('h1');
const p = document.createElement('p');
const input = document.createElement('input');
const form = document.createElement('form');
const ol = document.createElement('ol');


document.body.appendChild(cabecalho);
cabecalho.appendChild(h1);
h1.innerText = 'Minha Lista de Tarefas';
document.body.appendChild(p);
p.id = 'funcionamento';
p.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
document.body.appendChild(form);
form.appendChild(input);
input.id = 'texto-tarefa';
input.placeholder = 'Digite aqui sua tarefa';
form.appendChild(ol);
ol.id = 'lista-tarefas';
