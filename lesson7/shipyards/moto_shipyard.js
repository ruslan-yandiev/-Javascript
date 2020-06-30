'use strict'

module.exports = {
    MotoShipyard
};

function MotoShipyard() {
    this.createShip = function (name, enginePower, bodyMaterial) {
        if (typeof bodyMaterial != 'string')
            throw new Error('Укажите материал корабля в виде строки');

        return new MotoShip(name, enginePower, bodyMaterial);
    }

    this.repairShip = function (ship) {
        if (ship instanceof MotoShip == false)
            throw new Error('Ремонт может быть проведен только у моторных кораблей');

        return 'Корабль отремонтирован'
    }

    this.exchangeShip = function (ship) {
        if (ship instanceof MotoShip == false)
            throw new Error('Обмен может быть проведен только у моторных кораблей');

        return this.createShip(ship.name, ship.enginePower, ship.bodyMaterial)
    }
}
