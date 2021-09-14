const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
const itemsArray = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = '';
});

data.forEach((item) => {
  liMaker(item);
});

button.addEventListener('click', () => {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});
