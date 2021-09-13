function creationHeader() {
  const body = document.querySelector('body');
  const header = document.createElement('header');
  body.appendChild(header);
  const h1 = document.createElement('h1');
  h1.innerText = 'Minha Lista de Tarefas.';
  header.appendChild(h1);
}

creationHeader();

function creationParagraph() {
  const body = document.getElementsByTagName('body')[0];
  const paragraph = document.createElement('p');
  paragraph.id = 'funcionamento';
  paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  body.appendChild(paragraph);
}

creationParagraph();
