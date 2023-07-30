const ulElement = document.querySelector('ul');
const inputElement = document.querySelector('input');
const buttomElement = document.querySelector('button');

buttomElement.addEventListener('click', () => {
  const listItem = document.createElement('li');
  const itemName = document.createElement('div');
  const delButton = document.createElement('button');

  itemName.classList.add('list-name');

  itemName.innerHTML = inputElement.value;
  delButton.innerHTML = '삭제'

  delButton.addEventListener('click', () => {
    ulElement.removeChild(listItem);
  })

  listItem.appendChild(itemName);
  listItem.appendChild(delButton);
  ulElement.appendChild(listItem);

  inputElement.value = '';
})