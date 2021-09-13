let capturarCabecalho = document.querySelector('#cabecalho');
let criarCabecalho = document.createElement('h1');
criarCabecalho.innerHTML = 'Minha Lista de Tarefas';
capturarCabecalho.appendChild(criarCabecalho);

let capturarParagrafo = document.querySelector('p');
capturarParagrafo.id = 'funcionamento';
capturarParagrafo.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';


