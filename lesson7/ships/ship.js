'use strict'

module.exports = {
    Ship
};

function Ship(name) {
    this.name = name;
    this.colore = 'red';

    this.changeColor = function (colore) {
        return this.colore = colore
    };
}