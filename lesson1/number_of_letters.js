'use strict'

const vowels = 'aeiouy';
const consonants = 'bcdfghjklmnpqrstvwxz';
let vowelsCount = 0, consonantsCount = 0;

let string = prompt('Enter string').toLowerCase();

for (let i = 0; i < string.length; i++) {
  if (vowels.indexOf(string[i]) >= 0) vowelsCount++;

  if (consonants.indexOf(string[i]) >= 0) consonantsCount++;
}

alert(`Количество гласных букв: ${vowelsCount}\n Количество согласных букв: ${consonantsCount}`)