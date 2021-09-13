const divBody = document.querySelector('body');
const creatHeader = document.createElement('header');
const creatTitle = document.createElement('h1');
creatTitle.innerHTML = 'Minha Lista de Tarefas'
divBody.appendChild(creatHeader)
creatHeader.appendChild(creatTitle)

function paragraph(params) {
    const creatParagraph = document.createElement('p')
    const creatSection = document.createElement('section')
    divBody.appendChild(creatSection)
    creatSection.appendChild(creatParagraph)
    creatParagraph.innerHTML = params
    creatParagraph.id = 'funcionamento'
}
paragraph('Clique duas vezes em um item para marcá-lo como completo')

function inputList() {
    const creatDivInput = document.createElement('div')
    const creatInput = document.createElement('input')
    creatInput.id = 'texto-tarefa'
    divBody.appendChild(creatDivInput)
    creatDivInput.appendChild(creatInput)
}
inputList()

function List() {
    const creatTodoList = document.createElement('ol')
    const creatMain = document.createElement('main')
    creatTodoList.id = 'lista-tarefas'
    divBody.appendChild(creatMain)
    creatMain.appendChild(creatTodoList)

}
List()

function buttons(id, nome) {
    const creatButtons = document.createElement('button')
    const creatSectionButtons = document.createElement('section')
    creatButtons.id = id
    creatButtons.innerHTML = nome
    divBody.appendChild(creatSectionButtons)
    creatSectionButtons.appendChild(creatButtons)

}
buttons('criar-tarefa', 'add')

function creatItemList() {
    const catchimput = document.querySelector('#texto-tarefa')
    const catchList = document.querySelector('#lista-tarefas')
    const catchButton = document.querySelector('#criar-tarefa')
    catchButton.addEventListener('click', () => {
        let creatLi = document.createElement('li')
        creatLi.classList.add('item')
        catchList.appendChild(creatLi)
        creatLi.innerHTML = catchimput.value
        catchimput.value = ''
    })

}
creatItemList()

function backGColorLi() {
    const catchOl = document.querySelector('#lista-tarefas')
    catchOl.addEventListener('click',(event)=> {
        removeSelect()
        event.target.classList.add('selected')
        
    })
}
backGColorLi()

function removeSelect() {
    const catchLi = document.querySelectorAll('.item')
    for (let index = 0; index < catchLi.length; index += 1) {
        catchLi[index].classList.remove('selected');
    }
  }
  