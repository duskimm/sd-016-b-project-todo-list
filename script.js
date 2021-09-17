let capturarCabecalho = document.querySelector('#cabecalho');
let criarCabecalho = document.createElement('h1');
criarCabecalho.innerHTML = 'Minha Lista de Tarefas';
capturarCabecalho.appendChild(criarCabecalho);

let capturarParagrafo = document.querySelector('p');
capturarParagrafo.id = 'funcionamento';
capturarParagrafo.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';

let capturarSectionOne = document.querySelector('#input-list-button');

let criarInput = document.createElement('input');
criarInput.type = 'text';
criarInput.id = 'texto-tarefa';
capturarSectionOne.appendChild(criarInput);

let criarListaOrdenada = document.createElement('ol');
criarListaOrdenada.id = 'lista-tarefas';
capturarSectionOne.appendChild(criarListaOrdenada);

let criarBotaoInput = document.createElement('button');
criarBotaoInput.id = 'criar-tarefa';
criarBotaoInput.innerHTML = 'Adicionar';
capturarSectionOne.appendChild(criarBotaoInput);

let capturarInput = document.querySelector('#texto-tarefa');
let capturarBotaoAdicionar = document.querySelector('#criar-tarefa');
let capturarListaOrdenada = document.querySelector('#lista-tarefas');

capturarBotaoAdicionar.addEventListener('click', function(){
    if (capturarInput.value.length > 0) {
        let criarNovaLinha = document.createElement('li');
        criarNovaLinha.innerHTML = capturarInput.value;
        criarNovaLinha.className = 'cinzou';
        capturarListaOrdenada.appendChild(criarNovaLinha);
        capturarInput.value = '';
        let capturarNovaLinha = document.querySelectorAll('li');
        capturarNovaLinha[0].classList.add('selector');  
                  
    } else {
        alert('Nenhum elemento foi adicionado!!!');     
    }
});

capturarListaOrdenada.addEventListener('click', function(event){
    let capturarLi = document.querySelectorAll('li');    
    for(let index = 0; index < capturarLi.length; index += 1){
        let capturarClasseSelecao = document.querySelector('.selector');
        capturarClasseSelecao.classList.remove('selector');
        event.target.classList.add('selector');
    }
});

capturarListaOrdenada.addEventListener('click', function(){
    let li = document.querySelectorAll('li');
    for (let index = 0; index < li.length; index += 1){
        if(li[index].classList.contains('selector')){
            li[index].style.backgroundColor = 'rgb(128,128,128)';
        } else {
            li[index].style.backgroundColor = 'white';
        }
    }    
});

capturarListaOrdenada.addEventListener('dblclick', function(event){
    let pegarLi = document.getElementsByTagName('li');
    for (let index = 0; index < pegarLi.length; index += 1){
        pegarLi[index].classList.remove('completed');
        event.target.classList.add('completed');
    }        
});





