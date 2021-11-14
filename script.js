const screen = document.querySelector ('.grid__container');
const btnClear = document.getElementById ('clear');
const rangeInput = document.getElementById ('size');
const sizeDisplay = document.getElementById ('display');
const btnErase = document.getElementById ('erase');
const btnColor = document.getElementById ('inputColor');

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
});

btnErase.addEventListener("click", () => {
    color = '#ffffff';
});

btnColor.addEventListener('input', (e) =>{
    color = e.target.value; 
});

rangeInput.addEventListener('change', (e) =>{
    screenSize = e.target.valueAsNumber;
    screen.innerHTML = '';
    drawing(screenSize);
    sizeDisplay.textContent = ('size = ' + e.target.value);
});

rangeInput.addEventListener("mousemove", (e) => {
    sizeDisplay.textContent = ('size = ' + e.target.value);
});

