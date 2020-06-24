'use strict'

function Group(number) {
    this.number = number;
    this.students = [];

    this.checkStudent = function () {
        this.students.forEach(student => {
            if (!student.is_healthy) {
                console.log(student.name)
            }
        });
    };

    // this.addStudents = function (...students) {
    //     students.forEach(student => {
    //         this.students.push(student);
    //     });
    // };

    // более краткий вариант
    this.addStudents = function (...students) {
        this.students.push(...students);
    };
}