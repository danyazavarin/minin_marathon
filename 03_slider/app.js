let upBtn = document.querySelector('.up-button');
let downBtn = document.querySelector('.down-button');
let container = document.querySelector('.container');
let sidebar = document.querySelector('.sidebar');
let mainSlide = document.querySelector('.main-slide');
let slidesCount = mainSlide.querySelectorAll('div').length;
let activeSlideIndex = 0;
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up');
})

downBtn.addEventListener('click', () => {
    changeSlide('down');
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp' || event.key === 'w') {
        changeSlide('up');
    } else if (event.key === 'ArrowDown' || event.key === 's') {
        changeSlide('down');
    }
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0 ) {
            activeSlideIndex = slidesCount -1;
        }
    }

    let height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}