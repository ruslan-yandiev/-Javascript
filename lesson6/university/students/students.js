'use strict'

function Student(name) {
    this.name = name;
    this.is_healthy = true;

    this.fullName = function () {
        return this.name;
    };

    this.surname = function () {
        let names = this.name.split(' ');
        return `${names[0]} ${names[1][0]}. ${names[2][0]}.`;
    };
}