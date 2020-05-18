'use strict'

let number = [91, 93, 45, -67, -96, -40, 34, -96, 42, -58];

let countNegativeNumbers = 0;

let sum = 0;

function getSumOfNegativeNumbers (arr) {
	for (let i of arr) {
		if (i < 0) {
			countNegativeNumbers += 1;
			sum += i;
		}
	}
}

getSumOfNegativeNumbers(number);

alert(`count: ${countNegativeNumbers}, sum: ${sum}`);
