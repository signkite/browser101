const ulElement = document.querySelector('ul');
const inputElement = document.querySelector('input');
const buttomElement = document.querySelector('button');

function addItem() {
  const listItem = document.createElement('li');
  const itemName = document.createElement('div');
  const delButton = document.createElement('button');

  itemName.classList.add('list-name');

  if (!inputElement.value)
    return;

  itemName.innerHTML = inputElement.value;
  delButton.innerHTML = '삭제'

  delButton.addEventListener('click', () => {
    ulElement.removeChild(listItem);
  })

  listItem.appendChild(itemName);
  listItem.appendChild(delButton);
  ulElement.appendChild(listItem);

  inputElement.value = '';
  inputElement.focus();
}

inputElement.addEventListener('keypress', (event) => {
  if(event.key === 'Enter')
    addItem();
})

buttomElement.addEventListener('click', () => {
  addItem();
})