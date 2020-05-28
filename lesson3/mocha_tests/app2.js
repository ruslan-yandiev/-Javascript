'use strict'

module.exports.functions = {
    conversionText,
    showWordandSum,
};

// let text = prompt('Введите текст', '')

function conversionText(texts, myFunction) {
    if (typeof texts !== 'string') throw new Error('Входные данные не являются строкой');
    if (typeof myFunction !== 'function') throw new Error('Входные данные не являются функцией');

    return myFunction(texts.split(' '));
}

function showWordandSum(arr) {
    return arr.map((elem) => {
        let sum = 0;
        for (let i = 0; i < elem.length; ++i) sum += elem.charCodeAt(i);
        return { word: elem, sum: sum };
    });
}

// console.log(conversionText(text, showWordandSum));