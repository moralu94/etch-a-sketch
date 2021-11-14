const screen = document.querySelector ('.grid__container');
const btnClear = document.getElementById('clear');
const rangeInput = document.getElementById('slideRange');
const sizeDisplay =document.getElementById('display');

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

btnClear.addEventListener("click", () =>{
    screen.innerHTML = '';
    drawing(screenSize);
})

rangeInput.addEventListener('change', (e) =>{
    screenSize = e.target.value;
    screen.innerHTML = '';
    drawing(screenSize);
    sizeDisplay.textContent = ('size = ' + screenSize);
});

rangeInput.addEventListener('mousemove', (e) => {
    sizeDisplay.textContent = ('size = ' + screenSize);
})