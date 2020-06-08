'use strict'

alert('Нажмите правую кнопку мыши, чтобы выбрать цвет. Зажмите ctrl, чтобы затирать. Поверните колесо мыши, чтобы очистить экран')

let table = document.querySelector('table'),
    color = 'red';

const colorColection = ['red', 'white', 'black', 'blue', 'yellow', 'green', 'brown', 'orange', 'violet'];


for (let step = 50; step > 0; step--) {
    let tr = document.createElement('tr');

    for (let step = 100; step > 0; step--) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }

    table.appendChild(tr);
}

table.addEventListener('mouseover', clickTable);
table.addEventListener('contextmenu', colorTable);
table.addEventListener('wheel', resetColor);

function resetColor() {
    table.querySelectorAll('td').forEach((elem) => {
        elem.style.backgroundColor = 'transparent';
    });
}

function colorTable(event) {
    event.preventDefault();

    while (true) {
        color = prompt("Введите цвет: red, white, black, blue, yellow, green, brown, orange, violet", '');

        if (colorColection.includes(color)) {
            alert(`Выбран цвет: ${color}`);
            break;
        } else {
            alert('Нет такого цвета');
        }
    }
}

function clickTable(event) {
    if (event.target.tagName !== 'TD') return;

    if (event.ctrlKey) {
        event.target.style.backgroundColor = 'transparent';
    } else { 
        event.target.style.backgroundColor = color;
    }
};
