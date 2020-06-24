'use strict'

function Ship(name, model, position) {
    let _isAnchorDroped = false;
    const _index = Math.floor(Math.random() * 333);
    this.name = `${name}-${_index}`;
    this.model = model;
    this.position = position;
    this.speed = 0;
    this.distance = 0;

    this.moveTo = function (position) {
        if (_isAnchorDroped) throw new Error('You need to rise anchor');

        this.distanceСalculation(position);

        this.position = {
            x: position.x,
            y: position.y,
        }
    };

    this.distanceСalculation = function (position) {
        let x = this.position.x > position.x 
        ? this.position.x - position.x 
        : position.x - this.position.x;

        let y = this.position.y > position.y 
        ? this.position.y - position.y 
        : position.y - this.position.y;

        this.distance += (x + y);
    }

    this.move = function (direction) {
        if (_isAnchorDroped) throw new Error('You need to rise anchor');

        const directions = 'n w s e'
        if (!directions.includes(direction) || direction == '' || direction == ' ') {
            throw new Error('Нет такого направления. Введите n, w, s или e');
        };

        if (direction == 'n') {
            this.position.x++;
            this.distance++;
        };

        if (direction == 's') {
            this.position.x--;
            this.distance++;
        };

        if (direction == 'w') {
            this.position.y++;
            this.distance++;
        };

        if (direction == 'e') {
            this.position.y--;
            this.distance++;
        };
    };

    this.isAnchorDroped = function () {
        // console.log('isAnchorDroped', this);
        return _isAnchorDroped;
    };

    /**
     * @param {boolean} droped
     */
    this.dropAnchor = () => {
        if (this.speed) throw new Error('Speed must be 0');

        return _isAnchorDroped = true;
    };

    this.riseAnchor = function () {
        return _isAnchorDroped = false;
    };

    this.dropSpeed = function() {
        this.speed = 0;
    };
}
