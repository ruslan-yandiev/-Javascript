'use strict'

const img = document.querySelector('img');
const input = document.querySelector('input');
const collectionGifUrl = {};

input.addEventListener('input', debounce(onUpdate, 500, true));