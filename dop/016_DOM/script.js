let box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),

    // при поиски с помощью Селекторов необходимо уточнять, что искать (имя класса, тег ...)
    hearts = document.querySelectorAll('.heart'),
    oneHearts = document.querySelector('.heart');


console.log(box);
console.log(btns);
console.log(btns[0]);
console.log(circles);
console.log(circles[2]);
console.log(hearts);
console.log(hearts[1]);
console.log(oneHearts);