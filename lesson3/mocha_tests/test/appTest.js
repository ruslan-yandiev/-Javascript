const app = require('../app');
const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();

// Заметка для себя. по сути should упрощенный вариант expect. При should вызывается автматом expect и to в данном DSL 

describe('getSumOfPositiveNumbers', () => {
    let arr = [-91, -93, -45, 67, 96, 40, -34, 96, -42, 58];

    it('getSumOfPositiveNumbers should be object', () => {
        // Четыре способа:

        assert.isObject(app.getSumOfPositiveNumbers(arr));
        // assert.typeOf(app.getSumOfPositiveNumbers(arr), 'object');
        // expect(app.getSumOfPositiveNumbers(arr)).to.be.an('object');
        // app.getSumOfPositiveNumbers(arr).should.be.a('object');
    });

    it('sum should be 357', () => {
        // Три способа:

        // app.getSumOfPositiveNumbers(arr)['sum'].should.equal(357);
        expect(app.getSumOfPositiveNumbers(arr)['sum']).to.equal(357);
        // assert.equal(app.getSumOfPositiveNumbers(arr)['sum'], 357);
    });

    it('count should be 357', () => {
        // Три способа:

        // app.getSumOfPositiveNumbers(arr)['count'].should.equal(5);
        // expect(app.getSumOfPositiveNumbers(arr)['count']).to.equal(5);
        assert.equal(app.getSumOfPositiveNumbers(arr)['count'], 5);
    });

    it('getSumOfPositiveNumbers return { sum: 357, count: 5 }', () => {
        // Три способа (строгое сравнение):

        assert.deepEqual(app.getSumOfPositiveNumbers(arr), { count: 5, sum: 357 });
        // app.getSumOfPositiveNumbers(arr).should.include({ sum: 357, count: 5 });
        // expect(app.getSumOfPositiveNumbers(arr)).to.include({ sum: 357, count: 5 });
    });

    it('getSumOfPositiveNumbers include {}', () => {
        // Два способа:

        app.getSumOfPositiveNumbers(arr).should.include({});
        // expect(app.getSumOfPositiveNumbers(arr)).to.include({});
    });

    it('getSumOfPositiveNumbers must have keys a sum and a count', () => {
        // Три способа:

        // app.getSumOfPositiveNumbers(arr).should.have.all.keys('sum', 'count');
        // expect(app.getSumOfPositiveNumbers(arr)).to.have.all.keys('sum', 'count');
        assert.hasAllKeys(app.getSumOfPositiveNumbers(arr), ['sum', 'count']);
    });

    it('getSumOfPositiveNumbers should not have sam keys and cou and s ans c', () => {
        // Три способа:

        // assert.doesNotHaveAnyKeys(app.getSumOfPositiveNumbers(arr), ['sam', 'cou', 's', 'c']);
        expect(app.getSumOfPositiveNumbers(arr)).to.not.have.any.keys('sam', 'cou', 's', 'c');
        // app.getSumOfPositiveNumbers(arr).should.not.have.any.keys('sam', 'cou', 's', 'c');
    });

    it('getSumOfPositiveNumbers should be error (The entered data is not an array)', () => {
        // Два способа:

        expect(function () { app.getSumOfPositiveNumbers({}) }).to.throw("Входные данные не являются массивом");
        // (function () { app.getSumOfPositiveNumbers({}) }).should.throw("Входные данные не являются массивом");
    });

    it('getSumOfPositiveNumbers should be error (The entered data is not an array)', () => {
        // Два способа:

        expect(function () { app.getSumOfPositiveNumbers('abs') }).to.throw("Входные данные не являются массивом");
        // (function () { app.getSumOfPositiveNumbers('abs') }).should.throw("Входные данные не являются массивом");
    });

    it('getSumOfPositiveNumbers should be error (The entered data is not an array)', () => {
        // Два способа:

        expect(function () { app.getSumOfPositiveNumbers(123) }).to.throw("Входные данные не являются массивом");
        // (function () { app.getSumOfPositiveNumbers(123) }).should.throw("Входные данные не являются массивом");
    });
});


// Первый эксперимент
describe('sayHello', () => {
    it('Вернет Hello', () => {
        assert.equal(app.sayHello(), 'Hello');
    });

    it('sayHello should return type string', () => {
        assert.typeOf(app.sayHello(), 'string');
    });
});

describe('addNumber', () => {
    it('addNumber should be 10', () => {
        assert.equal(app.addNumber(5, 5), 10);
    });

    it('addNumber should return type number', () => {
        assert.typeOf(app.addNumber(), 'number');
    });

    it('addNumber should be above 9', () => {
        assert.isAbove(app.addNumber(5, 5), 9);
    });
});