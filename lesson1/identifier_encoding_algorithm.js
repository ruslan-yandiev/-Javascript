// Написать алгоритм кодирования идентификатора (задача, обратная тому, что показано в уроке).
// Шестнадцатиричный код AAAAAAAABBCDDDDDD
// А. метка времени (timestamp в секундах)
// B. кластер
// C. тип
// D. идентификатор пользователя
// Все входные данные - целые десятичные числа (значения можно “зашить” прямо в код решения).
// const id = '5eabb7d03a854bdff'

// const a = id.substr(0, 8);
// const timestamp = parseInt(a, 16);

// const b = id.substr(8, 2);
// const claster = parseInt(b, 16);

// const c = id.substr(10, 1);
// const type = parseInt(c, 16);

// const d = id.substr(11);
// const user = parseInt(d, 16);


// console.log(a, b, c, d);
// console.log('timestamp :', timestamp, new Date(timestamp * 1000));
// console.log('claster :', claster);
// console.log('type :', type);
// console.log('user :', user);
// ======================================================================

'use strict'

const a = 1588312016;

const b = 58;

const c = 8;

const d = 5553663;

let id = a.toString(16) + (b <= 10 ? '0' + b.toString(16) : b.toString(16)) + c.toString(16) + d.toString(16);

alert(id)