'use strict'

MotoShip.prototype = new Ship();
SailShip.prototype = new Ship();
MotoShipyard.prototype = new Shipyard();
SailShipyard.prototype = new Shipyard();


const motoShipyard = new MotoShipyard('Моторная верфь');
console.log(motoShipyard);
let motoShip = motoShipyard.createShip('Авианосец№1', 1000, 'сталь');
console.log(motoShip);
console.log(motoShipyard.repairShip(motoShip));
motoShipyard.changeColor(motoShip, 'green');
console.log(motoShip.colore);
motoShip = motoShipyard.exchangeShip(motoShip);
console.log(motoShip);

console.log('====================================================================');

const sailShipyard = new SailShipyard('Парусная верфь');
console.log(sailShipyard);
let sailShip = sailShipyard.createShip('Алые-Паруса', 3, 2500);
console.log(sailShip);
console.log(sailShipyard.repairShip(sailShip));
sailShipyard.changeColor(sailShip, 'blue');
console.log(sailShip.colore);
sailShip = sailShipyard.exchangeShip(sailShip);
console.log(sailShip);