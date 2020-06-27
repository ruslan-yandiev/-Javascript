'use strict'

function Ship(name) {
    this.name = name;
    this.colore = 'red';

    this.changeColor = function (colore) {
        this.colore = colore
    };
}