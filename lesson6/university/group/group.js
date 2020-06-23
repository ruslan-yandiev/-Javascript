'use strict'

function Group(number) {
    this.number = number;
    this.students = [];

    this.checkStudent = function () {
        this.students.forEach(student => {
            if (student.is_healthy == false) {
                console.log(student.name)
            }
        });
    };

    this.addStudents = function (...students) {
        students.forEach(student => {
            this.students.push(student);
        });
    };
}