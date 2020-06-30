'use strict'

const app = require('../ships/ship');
const expect = require('chai').expect;

const ship = new app.Ship('Good Ship');

describe('Ship', () => {

    it('to have colore', () => {
        expect(ship).to.have.property('colore');
    });

    it('to have name', () => {
        expect(ship).to.have.property('name');
    });

    it('', () => {
        expect(ship.changeColor('blue')).to.satisfy(function (colore) {
            return ship.colore = colore;
        });
    });
});