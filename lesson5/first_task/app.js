'use strict'

let table = document.querySelector('table'),
    index = 0

const colorColection = ['transparent', 'red', 'black', 'blue', 'yellow', 'green', 'brown', 'orange', 'violet'];


for (let step = 50; step > 0; step--) {
    let tr = document.createElement('tr');

    for (let step = 100; step > 0; step--) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }

    table.appendChild(tr);
}

table.addEventListener('mouseover', clickTable);
table.addEventListener('click', () => { index == (colorColection.length - 1) ? index = 0 : index++ });
table.addEventListener('wheel', resetColor);

function resetColor() {
    table.querySelectorAll('td').forEach((elem) => {
        elem.style.backgroundColor = 'transparent';
    });
}

function clickTable(event) {
    if (event.target.tagName !== 'TD') return;
    event.target.style.backgroundColor = colorColection[index];
};
