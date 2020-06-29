'use strict'

const app = require('../shipyards/moto_shipyard');
const moto_ship = require('../ships/moto_ship');
const expect = require('chai').expect;
const should = require('chai').should();

const moto_shipyard = new app.MotoShipyard();
const ship = {};

describe('MotoShipyard', () => {

    it('createShip should be error (Укажите материал корабля в виде строки)', () => {
        // Два способа:

        expect(function () {
            moto_shipyard.createShip('hhhh', 1, 1)
        }).to.throw("Укажите материал корабля в виде строки");

        (function () {
            moto_shipyard.createShip('hhhh', 1, 1)
        }).should.throw("Укажите материал корабля в виде строки");
    });

    it('repairShip should be error (Ремонт может быть проведен только у моторных кораблей)', () => {
        // Два способа:

        expect(function () {
            if (ship instanceof moto_ship.MotoShip == false) 
                throw new Error('Ремонт может быть проведен только у моторных кораблей');
        }).to.throw('Ремонт может быть проведен только у моторных кораблей');

        (function () {
            if (ship instanceof moto_ship.MotoShip == false)
                throw new Error('Ремонт может быть проведен только у моторных кораблей');
        }).should.throw('Ремонт может быть проведен только у моторных кораблей');
    });

    it('repairShip should be error (Обмен может быть проведен только у моторных кораблей)', () => {
        expect(function () {
            if (ship instanceof moto_ship.MotoShip == false)
                throw new Error('Обмен может быть проведен только у моторных кораблей');
        }).to.throw('Обмен может быть проведен только у моторных кораблей');
    });
});