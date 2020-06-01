'use strict'

// Поиск эелементов дом
let box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),

    // при поиски с помощью Селекторов необходимо уточнять, что искать (имя класса, тег ...)
    hearts = document.querySelectorAll('.heart'),
    oneHearts = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

// console.log(box);
// console.log(btns);
// console.log(btns[0]);
// console.log(circles);
// console.log(circles[2]);
// console.log(hearts);
// console.log(hearts[1]);
// console.log(oneHearts);

// Работа с найденными элементами и нодами(узлами) ======================================================

// сменим цвет исзменив css через js
box.style.backgroundColor = 'blue';

// изменим кнопку придав ей более округлый вид
btns[1].style.borderRadius = '100%';

// используем спец цикл для перебора коллекций(псевдо массива) и обычных массивов, сменим цвет
for (let elem of circles) {
    if (circles[0] == elem) elem.style.backgroundColor = 'red';
    if (circles[1] == elem) elem.style.backgroundColor = 'yellow';
    if (circles[2] == elem) elem.style.backgroundColor = 'green';
};

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }
// более правильный вариант в безымянную функцию можем передать з аргумента, 2 не обязательных последних
// первый аргумент елемент массива или псевдо массива, второй индекс, третий сам передаваемый массив или коллекция но назвать аргумент нужно по другому
// hearts.forEach((item, index, arrHearts) => {
//     item.style.backgroundColor = 'blue';
// });

// Создадим новый элемент на пример тег div
let div = document.createElement('div'),
// создадим текстовый узел
    text = document.createTextNode('Тут был Я');

// добавим css класс елементу div
div.classList.add('black'); // слзданный элемент находится только в памяти и не применен к HTML, нашему Дому



// Добавим внутрь тега div текст
// div.innerHTML = 'Hello World!';
// Добавим внутрь тега div текст с тегом
// div.innerHTML = '<h2>Hello World!</h2>';
// Для безопасности используют несколько иной способ, чтобы добавить только текст без вредоносного кода
div.textContent = 'Hello World!';


// Добавим тег div в конец родителя body
// document.body.appendChild(div);

// теперь добавим впереди. Первым аргументом цикла укажем, что мы вставляем, вторым перед чем мы вставляем
// document.body.insertBefore(div, circles[2]);

// удалим ноду детеныша circles[1] из родителя body
document.body.removeChild(circles[1]);

// ====================

// Добавим тег div в конец родительского тега div который мы нашли по имени css класса wrapper и сохранили в переменную wrapper
// wrapper.appendChild(div);

// теперь добавим впереди. Первым аргументом цикла укажем, что мы вставляем, вторым перед чем мы вставляем
wrapper.insertBefore(div, hearts[0]);

// удалим ноду детеныша hearts[2] из родителя wrapper
wrapper.removeChild(hearts[2]);

// ========================================

// Заменим один элемент другим первый аргумент то, что мы хотим пеместить, второй то, что хотим заменить
document.body.replaceChild(btns[1], circles[1]);

// console.log(text);
console.log(div);


