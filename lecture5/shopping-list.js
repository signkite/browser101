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

// todo
// 자동으로 input focus 되도록
// 그림자 추가
// input에 엔터키 누르면 추가되도록
// input에 아무것도 없으면 추가되지 않도록
// 사용자가 많이 입력하면 자동으로 아래로 스크롤