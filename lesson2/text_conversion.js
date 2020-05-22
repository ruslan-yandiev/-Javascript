'use strict'

let text = prompt('Введите текст', '')

function conversionText (texts) {
 	return	texts.split(' ').map((elem) => {
		let sum = 0;
		for (let i = 0; i < elem.length; ++i ) sum += elem.charCodeAt(i);
		return { word: elem, sum: sum };
	});
}

console.log( conversionText(text) );
