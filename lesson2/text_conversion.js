'use strict'

let text = prompt('Введите текст', '')

let accumulateObject = []

function conversionText (texts) {
	texts.split(' ').map((elem) => {
		let sum = 0;

		for (let i = 0; i < elem.length; ++i ) sum += elem.charCodeAt(i);

		accumulateObject.push ({ word: elem, sum: sum });
	});
}

conversionText(text);

console.log(accumulateObject);
