'use strict'

module.exports.functions = {
    sayHello,
    addNumber,
    getSumOfPositiveNumbers,
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