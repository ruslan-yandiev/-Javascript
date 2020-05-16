'use strict'

let numbers = [];
let sum;
let average;

while (true) {
    let number = prompt("Введите число", '');

    if (number == '') break;

    numbers.push(+number);
    average = (sum = numbers.reduce((a, b) => a + b, 0)) / numbers.length;
    console.log('Сумма чисел = ' + sum + '\n количество чисел = ' + numbers.length + '\n среднее арифметическое = ' + average + '\n');
}

alert(`Сумма чисел = ${sum}\n количество чисел = ${numbers.length}\n среднее арифметическое = ${average}\n`)