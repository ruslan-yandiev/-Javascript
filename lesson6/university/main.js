'use strict'

const ivanov = new Student('Ivanov Mihail Petrovich');
console.log(ivanov);
console.log(ivanov.fullName());
console.log(ivanov.surname());

const sidorov = new Student('Sidirov Konstantin Robinovich');
console.log(sidorov);
console.log(sidorov.fullName());
console.log(sidorov.surname());
sidorov.is_healthy = false;

const vasiliev = new Student('Vasilev Anton Pupkin');
vasiliev.is_healthy = false;

const group = new Group(317);
group.addStudents(ivanov, sidorov, vasiliev);
console.log(group);
group.checkStudent();