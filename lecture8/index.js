let timerInterval;
let isGamePlaying = false;
let carrotCount = 10;
const playBtn = document.querySelector('.play-btn');
const map = document.querySelector('body');
const carrotCountElement = document.querySelector('.carrot-count');


playBtn.addEventListener('click', () => {
  if (isGamePlaying) {
    gameEnd();
    return;
  }
  gameStart();
});

// 10초 타이머 시작
function timerStart() {
  const duration = 10;

  const timerDisplay = document.querySelector('.timer');
  timerDisplay.innerText = duration;

  const date = new Date();
  const endTime = date.getTime() + duration * 1000;

  timerInterval = setInterval(() => {
    const date = new Date();
    const leftTime = Math.round((endTime - date.getTime()) / 1000);
    timerDisplay.innerText = leftTime;

    if (leftTime <= 0) {
      gameLoose();
    }
  }, 1000);
}

// map의 가로 절반 이하 부분에 벌레 7aka, 당근 10개 랜덤 배치
function createItems() {
  const mapWidth = map.clientWidth;
  const mapHeight = map.clientHeight;

  // create carrots
  for (i = 0; i < 10; i++) {
    const carrot = document.createElement('img');
    carrot.src = 'img/carrot.png';

    const randTop = Math.floor(Math.random() * (mapHeight / 2 - 80) + mapHeight / 2);
    const randLeft = Math.floor(Math.random() * (mapWidth - 80));
    carrot.style.top = `${randTop}px`;
    carrot.style.left = `${randLeft}px`;

    carrot.classList.add('carrot');
    map.appendChild(carrot);
  }

  // create bugs
  for (i = 0; i < 7; i++) {
    const bug = document.createElement('img');
    bug.src = 'img/bug.png';

    const randTop = Math.floor(Math.random() * (mapHeight / 2 - 50) + mapHeight / 2);
    const randLeft = Math.floor(Math.random() * (mapWidth - 50));
    bug.style.top = `${randTop}px`;
    bug.style.left = `${randLeft}px`;

    bug.classList.add('bug');
    map.appendChild(bug);
  }
}

// 모든 bug, carrot 삭제
function deleteItems() {
  const bugs = document.querySelectorAll('.bug');
  const carrots = document.querySelectorAll('.carrot');

  bugs.forEach(bug => bug.remove());
  carrots.forEach(carrot => carrot.remove());
}

function gameLoose() {
  gameEnd();
  alert('You Loose!');
}

function gameWin() {
  gameEnd();
  alert('You Win!');
}

map.addEventListener('click', (e) => {
  if (e.target.className === 'bug') {
    gameLoose();
  } else if (e.target.className === 'carrot') {
    e.target.remove();
    carrotCount--;
    carrotCountElement.innerText = carrotCount;
    if (carrotCount === 0) {
      gameWin();
    }
  }
});

// 게임이 종료되었을 때 값들 초기화
function gameEnd() {
  clearInterval(timerInterval);
  deleteItems();
  isGamePlaying = false;
  playBtn.innerText = 'Play';
  carrotCount = 10;
}

// 게임 시작
function gameStart() {
  timerStart();
  createItems();
  isGamePlaying = true;
  playBtn.innerText = 'Stop';
  carrotCountElement.innerText = carrotCount;
}
