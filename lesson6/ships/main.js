'use strict'

const ship = new Ship('Best ship', 'B-35', {
    x: 10,
    y: 10
});
console.log(ship);

ship.moveTo({
    x: 11,
    y: 8
});
ship.move('w');
// console.log(ship.dropAnchor());
// console.log(ship.riseAnchor());
// ship.move('w');
console.log(ship.isAnchorDroped());

const ship2 = new Ship('Best ship', 'B-35', {
    x: 3,
    y: 3
});
console.log(ship2);
ship2.move('w');

const port = new Port;
port.moor(ship);
port.moor(ship2);
console.log(port);
port.unmoor(ship);
console.log(port);