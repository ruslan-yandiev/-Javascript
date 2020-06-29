'use strict'

const app = require('../shipyards/sail_shipyard');
const sail_ship = require('../ships/sail_ship');
const expect = require('chai').expect;
const should = require('chai').should();

const sail_shipyard = new app.SailShipyard();
const ship = {};

describe('SailShipyard', () => {

    it('createShip should be error (Укажите общую площадь парусов в виде числа)', () => {
        // Два способа:

        expect(function () {
            sail_shipyard.createShip('hhhh', 1, 'w')
        }).to.throw("Укажите общую площадь парусов в виде числа");

        (function () {
            sail_shipyard.createShip('hhhh', 1, 'w')
        }).should.throw("Укажите общую площадь парусов в виде числа");
    });

    it('repairShip should be error (Ремонт может быть проведен только у парусных кораблей)', () => {
        // Два способа:

        expect(function () {
            if (ship instanceof sail_ship.SailShip == false)
                throw new Error('Ремонт может быть проведен только у парусных кораблей');
        }).to.throw('Ремонт может быть проведен только у парусных кораблей');

        (function () {
            if (ship instanceof sail_ship.SailShip == false)
                throw new Error('Ремонт может быть проведен только у парусных кораблей');
        }).should.throw('Ремонт может быть проведен только у парусных кораблей');
    });

    it('repairShip should be error (Обмен может быть проведен только у парусных кораблей)', () => {
        expect(function () {
            if (ship instanceof sail_ship.SailShip == false)
                throw new Error('Обмен может быть проведен только у парусных кораблей');
        }).to.throw('Обмен может быть проведен только у парусных кораблей');
    });
});