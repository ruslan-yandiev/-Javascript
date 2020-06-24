'use strict'

function Student(name) {
    this.name = name;
    this.crushName = name.split(' ');
    this.surname = this.crushName[0];
    this.firstName = this.crushName[1];
    this.middleName = this.crushName[2];
    this.is_healthy = true;

    this.fullName = function () {
        return this.name;
    };

    this.surnameAndInitials = function () {
        return `${this.surname} ${this.firstName[0]}. ${this.middleName[0]}.`;
    };
}