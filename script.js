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
    linha.className = "linha-de-tarefas"
    linha.innerText = valorDoTexto
    lista.appendChild(linha)

    let valorNulo = ''

    function limpaInput (){
        tarefa.value = valorNulo
    }
    limpaInput();
}

//quando uma tarefa for clickada receberá a com cinza, e somente uma tarefa pode ser selecionada por vez

 let tarefas = document.querySelector("#lista-tarefas")

 tarefas.addEventListener("click", selecionaTarefa)

 function selecionaTarefa (event){
     let linhas = document.querySelectorAll(".linha-de-tarefas")
     for (let i=0; i < linhas.length; i+=1){
         linhas[i].classList.remove('selecionada')
     }
     event.target.classList.add("selecionada");
 }

 //com click duplo a tarefa é riscada, essa açao pode ser desfeita quando recebe novamente click duplo

 tarefas.addEventListener('dblclick', riscaTarefa)

 function riscaTarefa (event){
         event.target.classList.toggle('completed')
}


//adiciona botao que apaga todos os itens da lista

function criaBotaoApagar (){
 let botaoApagaTudo = document.createElement('button')
 botaoApagaTudo.innerText = 'apagar lista';
 botaoApagaTudo.id= 'apaga-tudo'
 container.appendChild(botaoApagaTudo)
}

criaBotaoApagar()

let botaoApagaTudo = document.getElementById('apaga-tudo');
botaoApagaTudo.addEventListener('click', apagaLista)

function apagaLista(event){
    let tarefas = document.querySelector("#lista-tarefas")
    let linhas = document.querySelectorAll(".linha-de-tarefas");
    for (let i=0; i< linhas.length; i+=1){
      tarefas.removeChild(linhas[i]);
    }
}

//adiciona botao que remove finzalizados 

function criaBotaoApagarFinalizados (){
let botaoApagaFinalizados = document.createElement('button');
botaoApagaFinalizados.innerText = "apaga tarefas finalizadas"
botaoApagaFinalizados.id= "remover-finalizados"
container.appendChild(botaoApagaFinalizados)
}
criaBotaoApagarFinalizados();

let botaoApagaFinalizados = document.getElementById('remover-finalizados')
botaoApagaFinalizados.addEventListener("click",apagarCompletas)

function apagarCompletas(){
    let tarefas = document.querySelector("#lista-tarefas")
    let finzalizados = document.querySelectorAll(".completed");
    for (let i=0; i< finzalizados.length; i+=1){
      tarefas.removeChild(finzalizados[i]);
    }
}

//botao que salva a lista, e ao abrir a pagina novamente a lista estará lá


