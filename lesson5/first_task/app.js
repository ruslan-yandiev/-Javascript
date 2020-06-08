'use strict'
// получим коллекцию елементов
const table = document.getElementsByTagName('table')[0];

// назначим событие на событие клик на всю таблицу (делегируем)
table.addEventListener('click', clickTable);
// перехватим еще одно событие наведение мыши тип события type: mouseover и используем его
table.addEventListener('mouseover', clickTable);

// у каждого дочернего элемента таблицы будем менять цет после нажатия или у самой таблицы если на нее кликнем 
function clickTable(event) {
    // так-как target является Узлом(Нодой), мы можем использовать это, использовав атрибуты узла
    if (event.target.tagName !== 'TD') return;

    // если event.shiftKey (значения по ключу event['shiftKey']) вернет true (тоесть был при клике зажат shift)
    if (event['shiftKey']) {
        event.target.style.backgroundColor = 'transparent';
    } else {
        if (event.target.dataset.codeee) {
            event.target.style.backgroundColor = 'green';
        } else if (event.target.dataset.c) {
            event.target.style.backgroundColor = 'black';
        } else if (event.ctrlKey) {
            event.target.style.backgroundColor = 'blue';
        } else {
            // однохренственно, что выше
            event['target']['style']['backgroundColor'] = 'red';
        }
        console.log(event, event.target.tagName, event.target.dataset.codeee);
    }
};