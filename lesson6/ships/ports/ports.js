'use strict'

function Port() {
    let _position = {
        x: 20,
        y: 20
    };
    this.ships = [];
    this.name = 'Port Royal'

    this.position = function () {
        // console.log('isAnchorDroped', this);
        return _isAnchorDroped;
    };

    // метод moor(ship) пришвартовывает корабль и ставит его на якорь
    this.moor = function (ship) {
        ship.speed = 0;
        ship.dropAnchor();
        this.ships.push(ship);
    };

    // метод unmoor(ship) отшвартовывает корабль и снимает его с якоря 
    this.unmoor = function (ship) {
        if (!this.ships.includes(ship)) throw new Error('В порту нет такого корабля');
        let index = this.ships.indexOf(ship);
        this.ships.splice(index, 1)[0].riseAnchor();
    };
}