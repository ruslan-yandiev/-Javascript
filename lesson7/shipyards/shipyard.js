'use strict'

const Shipyard = function (name) {
    this.name = name;

    this.changeColor = function (ship, colore) {
        ship.changeColor(colore);
    };
}