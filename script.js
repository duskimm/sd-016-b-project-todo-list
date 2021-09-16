const cabecalho = document.createElement('header');
const h1 = document.createElement('h1');
const p = document.createElement('p');

document.body.appendChild(cabecalho);
cabecalho.appendChild(h1);
h1.innerText = 'Minha Lista de Tarefas';
document.body.appendChild(p);
p.id = 'funcionamento';
p.innerText = 'Clique duas vezes em um item para marcá-lo como completo';