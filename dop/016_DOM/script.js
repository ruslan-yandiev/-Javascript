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

// Array.from(wrapper.children).forEach(console.log);
let items = Array.from(wrapper.children);
// items.forEach(item => item.style.backgroundColor = 'blue');
// items.forEach((item) => { item.style.backgroundColor = 'blue' });
// items.forEach(function(item) { item.style.backgroundColor = 'blue' });

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

//клонируем тег div с css классом black, true переданный в качестве аргумента укажет, что мы клонируем со всеми внутрениими элементами полностью
// divCopy = div.cloneNode(true);


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


// Итого
// Методы для создания узлов:

// document.createElement(tag) – создаёт элемент с заданным тегом,
// document.createTextNode(value) – создаёт текстовый узел(редко используется),
// elem.cloneNode(deep) – клонирует элемент, если deep == true, то со всеми дочерними элементами.
// Вставка и удаление:

// node.append(...nodes or strings) – вставляет в node в конец,
// node.prepend(...nodes or strings) – вставляет в node в начало,
// node.before(...nodes or strings) –- вставляет прямо перед node,
// node.after(...nodes or strings) –- вставляет сразу после node,
// node.replaceWith(...nodes or strings) –- заменяет node.
// node.remove() –- удаляет node.
// Устаревшие методы:

// parent.appendChild(node)
// parent.insertBefore(node, nextSibling)
// parent.removeChild(node)
// parent.replaceChild(newElem, node)
// Все эти методы возвращают node.

// Если нужно вставить фрагмент HTML, то elem.insertAdjacentHTML(where, html) вставляет в зависимости от where:

// "beforebegin" – вставляет html прямо перед elem,
// "afterbegin" – вставляет html в elem в начало,
// "beforeend" – вставляет html в elem в конец,
// "afterend" – вставляет html сразу после elem.
// Также существуют похожие методы elem.insertAdjacentText и elem.insertAdjacentElement, они вставляют текстовые строки и элементы, но они редко используются.

// Чтобы добавить HTML на страницу до завершения её загрузки:

// document.write(html)
// После загрузки страницы такой вызов затирает документ.В основном встречается в старых скриптах.


// Для управления классами существуют два DOM - свойства:

// className – строковое значение, удобно для управления всем набором классов.
// classList – объект с методами add / remove / toggle / contains, удобно для управления отдельными классами.
// Чтобы изменить стили:

// Свойство style является объектом со стилями в формате camelCase.Чтение и запись в него работают так же, как изменение соответствующих свойств в атрибуте "style".Чтобы узнать, как добавить в него important и делать некоторые другие редкие вещи – смотрите документацию.

// Свойство style.cssText соответствует всему атрибуту "style", полной строке стилей.

// Для чтения окончательных стилей(с учётом всех классов, после применения CSS и вычисления окончательных значений) используется:

// Метод getComputedStyle(elem, [pseudo]) возвращает объект, похожий по формату на style.Только для чтения.


// У элементов есть следующие геометрические свойства(метрики):

// offsetParent – ближайший CSS - позиционированный родитель или ближайший td, th, table, body.
// offsetLeft / offsetTop – позиция в пикселях верхнего левого угла относительно offsetParent.
// offsetWidth / offsetHeight – «внешняя» ширина / высота элемента, включая рамки.
// clientLeft / clientTop – расстояние от верхнего левого внешнего угла до внутренного.Для операционных систем с ориентацией слева - направо эти свойства равны ширинам левой / верхней рамки.Если язык ОС таков, что ориентация справа налево, так что вертикальная полоса прокрутки находится не справа, а слева, то clientLeft включает в своё значение её ширину.
// clientWidth / clientHeight – ширина / высота содержимого вместе с внутренними отступами padding, но без полосы прокрутки.
// scrollWidth / scrollHeight – ширины / высота содержимого, аналогично clientWidth / Height, но учитывают прокрученную, невидимую область элемента.
// scrollLeft / scrollTop – ширина / высота прокрученной сверху части элемента, считается от верхнего левого угла.
// Все свойства доступны только для чтения, кроме scrollLeft / scrollTop, изменение которых заставляет браузер прокручивать элемент.


// Размеры:

// Ширина / высота видимой части документа(ширина / высота области содержимого): document.documentElement.clientWidth / Height

// Ширина / высота всего документа с прокрученной частью:

// let scrollHeight = Math.max(
// document.body.scrollHeight, document.documentElement.scrollHeight,
// document.body.offsetHeight, document.documentElement.offsetHeight,
// document.body.clientHeight, document.documentElement.clientHeight
// );
// Прокрутка:

// Прокрутку окна можно получить так: window.pageYOffset / pageXOffset.

// Изменить текущую прокрутку:

// window.scrollTo(pageX, pageY) – абсолютные координаты,
// window.scrollBy(x, y) – прокрутка относительно текущего места,
// elem.scrollIntoView(top) – прокрутить страницу так, чтобы сделать elem видимым(выровнять относительно верхней / нижней части окна).


// Любая точка на странице имеет координаты:

// Относительно окна браузера – elem.getBoundingClientRect().
// Относительно документа – elem.getBoundingClientRect() плюс текущая прокрутка страницы.
// Координаты в контексте окна подходят для использования с position: fixed, а координаты относительно документа – для использования с position: absolute.

// Каждая из систем координат имеет свои преимущества и недостатки.Иногда будет лучше применить одну, а иногда – другую, как это и происходит с позиционированием в CSS, где мы выбираем между absolute и fixed.



