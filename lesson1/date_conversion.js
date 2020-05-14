'use strict'

const daysInMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let date;

while (!Array.isArray(date)) {
	date = prompt('Введите дату в формате мм/дд/гггг', '12/22/2019');
	date[2] === '/' && date[5] === '/' ? date = date.split('/') : alert('Разделитель должен быть /')
}

function checkDate(date) {

	if (+date[0] > 12 || +date[0] < 1) {
		return false;
	} else if (+date[1] < 1 || +date[1] > daysInMonths[+date[0] - 1]) {
		return false;
	} else if (+date[2] < 1900 || +date[2] > new Date().getFullYear()) {
		return false;
	}

	return true
}

function showDate(date) {
	return checkDate(date) ? `${date[1]}.${date[0]}.${date[2]}` : 'Ошибка в дате';
}

alert(showDate(date))

