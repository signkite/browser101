const ulElement = document.querySelector('ul');
const inputElement = document.querySelector('input');
const buttomElement = document.querySelector('button');

buttomElement.addEventListener('click', () => {
  const listItem = document.createElement('li');
  const itemName = document.createElement('div');
  const delButton = document.createElement('button');

  listItem.style.cssText = `
    display: flex;
    width: 100%;
    height: 30px;
  `;

  itemName.style.cssText = `
    flex-grow: 1;
  `

  itemName.innerHTML = inputElement.value;
  delButton.innerHTML = '삭제'

  listItem.appendChild(itemName);
  listItem.appendChild(delButton);

  ulElement.appendChild(listItem);
  console.log(inputVal);
  inputElement.value = '';
})