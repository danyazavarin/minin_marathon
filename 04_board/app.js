const board = document.querySelector('#board');
const SQUARES_NUMBER = 500;
const colors = ['#edc855', '#8bc96b', '#d94f40', '#973fbb', '#3989c0', '#dc8c45', '#2ecc71'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', setColor);
    square.addEventListener('mouseleave', () => removeColor(square));
    board.append(square);
}

// can be used like this
function setColor(event) {
    let element = event.target;
    let color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

// or like this
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000000`;
}

function getRandomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}