function header() {
  let body = document.querySelector('body')
  let header = document.createElement('header')
  header.innerText = 'Minha Lista de Tarefas'
  body.appendChild(header)
}
header() 

function paragrafo() {
  let header = document.querySelector('header')
  let p = document.createElement('p')
  p.innerText = 'Clique duas vezes em um item para marcá-lo como completo'
  p.id = 'funcionamento'
  header.appendChild(p)
}
paragrafo()

function input() {
  let p = document.querySelector('p')
  let input = document.createElement('input')
  input.id = 'texto-tarefa'
  p.appendChild(input)
}
input()

function listaDeTarefas() {
  let input = document.querySelector('input')
  let listaDeTarefas = document.createElement('ol')
  listaDeTarefas.id = 'lista-tarefas'
  input.appendChild(listaDeTarefas)
}
listaDeTarefas()