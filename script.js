// META PESSOAL:
// CRIAR TODO HTML NO JS
// TALVEZ MANIPULAR O CSS PELO JS TBM (O menino está ousado!!! kkkkkkk)

// 1 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag

const header = document.createElement('header');
document.body.append(header);

const headH1 = document.createElement('h1');
headH1.id = 'title';
headH1.append('Minha Lista de Tarefas');
header.append(headH1);

// 2 - Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"

const headPara = document.createElement('p')
headPara.id = 'funcionamento';
headPara.append('Clique duas vezes em um item para marcá-lo como completo');
header.append(headPara);

// // 3 - Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista

const input01 = document.createElement('input');
document.body.append(input01);




