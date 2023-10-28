const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
let time = 0;
let score = 0;
const colors = ['#edc855', '#8bc96b', '#d94f40', '#973fbb', '#3989c0', '#dc8c45', '#2ecc71'];

startBtn.onclick = (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
}

timeList.onclick = (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        startGame();
    }
}

board.onclick = (event) => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle();
    }
}

function startGame() {
    screens[1].classList.add('up');
    setTime(time);
    createRandomCircle();
    setInterval(decreaseTime, 1000);
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    }
    else {
        let current = --time;
        if (current < 10) current = `0${current}`;
        setTime(current);
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Cчет:<span class="primary">${score}</span></h1>`
}

function createRandomCircle() {
    let circle = document.createElement('div');
    circle.classList.add('circle');

    let size = getRandomNumber(10,60);
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    let {width, height} = board.getBoundingClientRect();
    let x = getRandomNumber(0, width - size);
    let y = getRandomNumber(0, height - size);
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;

    circle.style.background = getRandomColor();

    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
