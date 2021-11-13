const screen = document.querySelector ('.grid__container');

let screenSize = 16;
let pixel = '';
let color = '#000000';

const drawing = (screenSize) => {
    for (i = 0; i < screenSize ** 2; i++){
        pixel = document.createElement('div');
        pixel.classList.add ("pixel");
        pixel.style.backgroundColor = 'white';
        screen.appendChild(pixel);
    }
    screen.style.gridTemplateColumns = `repeat(${screenSize}, auto)`;
    screen.style.gridTemplateRows = `repeat(${screenSize}, auto)`;
}

function paint (e) {
    e.target.style.backgroundColor = color;
}

screen.addEventListener('mouseover', paint);
drawing(screenSize);