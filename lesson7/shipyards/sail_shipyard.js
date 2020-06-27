'use strict'

const SailShipyard = function () {
    this.createShip = function (name, countMast, sailArea) {
        if (typeof sailArea != 'number')
            throw new Error('Укажите общую площадь парусов в виде числа');

        return new SailShip(name, countMast, sailArea);
    }

    this.repairShip = function (ship) {
        if (ship instanceof SailShip == false)
            throw new Error('Ремонт может быть проведен только у парусных кораблей');

        return 'Корабль отремонтирован'
    }

    this.exchangeShip = function (ship) {
        if (ship instanceof SailShip == false)
            throw new Error('Обмен может быть проведен только у парусных кораблей');

        return this.createShip(ship.name, ship.countMast, ship.sailArea)
    }
}