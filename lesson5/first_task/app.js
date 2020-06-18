'use strict'

const table = document.querySelector('table'),
    index = 0

const colorCollection = ['transparent', 'red', 'black', 'blue', 'yellow', 'green', 'brown', 'orange', 'violet'];

function createTable(height, width) {
    for (let step = height; step > 0; step--) {
        let tr = document.createElement('tr');

        for (let step = width; step > 0; step--) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}

createTable(50, 100);

table.addEventListener('mouseover', clickTable);
table.addEventListener('click', getColor);
table.addEventListener('wheel', resetColor);

function resetColor() {
    table.querySelectorAll('td').forEach((elem) => {
        elem.style.backgroundColor = 'transparent';
    });
}

function getColor() {
    index == (colorCollection.length - 1) ? index = 0 : index++
}

function clickTable(event) {
    if (event.target.tagName !== 'TD') return;
    event.target.style.backgroundColor = colorCollection[index];
};
