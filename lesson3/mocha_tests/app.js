'use strict'

module.exports.functions = {
    sayHello,
    addNumber,
    getSumOfPositiveNumbers,
    setArr,
    getArr,
}

function getSumOfPositiveNumbers(arr) {
    if (!Array.isArray(arr)) throw new Error('Входные данные не являются массивом');
    let countPositiveNumbers = arr.filter(number => number >= 0)
    let sum = countPositiveNumbers.reduce((a, b) => a + b, 0);

    return {
        sum: sum,
        count: countPositiveNumbers.length
    };
}

// Первый эксперимент
function sayHello() {
    return 'Hello';
}

function addNumber(a, b) {
    return a + b;
}

// Спомощью геттера и сеттера мы можем передать и протестить дефолтное значение переменной arrText и в дальнейшем изменить ее в тесте.
let arrText = ['a', 'b', 'c'];
function getArr() { return arrText; }
function setArr(newArr) { arrText = newArr }