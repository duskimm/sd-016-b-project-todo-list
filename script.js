//criar botao com nome Adiciona tarefa

function criaBotao(){
    let container = document.getElementById('container')
    let botaoAdicionar = document.createElement('button');
    botaoAdicionar.innerText = 'Adicionar';
    botaoAdicionar.id = "criar-tarefa";
    container.appendChild(botaoAdicionar)
}
criaBotao();

//realizar o input de uma tarefa e ao clicar no botao a tarefa é adicionada na lista, e some do input

let botaoAdicionar = document.getElementById('criar-tarefa');

botaoAdicionar.addEventListener("click", adicionaTarefa)

function adicionaTarefa (){
    let tarefa = document.getElementById('texto-tarefa');
    let valorDoTexto = tarefa.value;
    let lista = document.getElementById('lista-tarefas');
    let linha = document.createElement('li');
    linha.innerText = valorDoTexto
    lista.appendChild(linha)

    let valorNulo = ''

    function limpaInput (){
        tarefa.value = valorNulo
    }
    limpaInput();
}