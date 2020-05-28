const app = require('../app');
const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();

// Заметка для себя. по сути should упрощенный вариант expect. При should вызывается автматом expect и to в данном DSL 

describe('getSumOfPositiveNumbers', () => {
    let arr = [-91, -93, -45, 67, 96, 40, -34, 96, -42, 58];

    it('getSumOfPositiveNumbers should be object', () => {
        // Четыре способа:
        
        assert.isObject(app.functions.getSumOfPositiveNumbers(arr));
        assert.typeOf(app.functions.getSumOfPositiveNumbers(arr), 'object');
        expect(app.functions.getSumOfPositiveNumbers(arr)).to.be.an('object');
        app.functions.getSumOfPositiveNumbers(arr).should.be.a('object');
    });

    it('sum should be 357', () => {
        // Три способа:

        app.functions.getSumOfPositiveNumbers(arr)['sum'].should.equal(357);
        expect(app.functions.getSumOfPositiveNumbers(arr)['sum']).to.equal(357);
        assert.equal(app.functions.getSumOfPositiveNumbers(arr)['sum'], 357);
    });

    it('count should be 357', () => {
        // Три способа:

        app.functions.getSumOfPositiveNumbers(arr)['count'].should.equal(5);
        expect(app.functions.getSumOfPositiveNumbers(arr)['count']).to.equal(5);
        assert.equal(app.functions.getSumOfPositiveNumbers(arr)['count'], 5);
    });

    it('getSumOfPositiveNumbers return { sum: 357, count: 5 }', () => {
        // Семь способов (строгое сравнение):

        assert.deepEqual(app.functions.getSumOfPositiveNumbers(arr), { count: 5, sum: 357 });
        app.functions.getSumOfPositiveNumbers(arr).should.include({ sum: 357, count: 5 });
        expect(app.functions.getSumOfPositiveNumbers(arr)).to.include({ sum: 357, count: 5 });
        expect(app.functions.getSumOfPositiveNumbers(arr)).to.deep.equal({ sum: 357, count: 5 });
        app.functions.getSumOfPositiveNumbers(arr).should.deep.equal({ sum: 357, count: 5 });
        expect(app.functions.getSumOfPositiveNumbers(arr)).to.deep.include({ sum: 357, count: 5 });
        app.functions.getSumOfPositiveNumbers(arr).should.deep.include({ sum: 357, count: 5 });
    });

    it('getSumOfPositiveNumbers include {}', () => {
        // Два способа:

        app.functions.getSumOfPositiveNumbers(arr).should.include({});
        expect(app.functions.getSumOfPositiveNumbers(arr)).to.include({});
    });

    it('getSumOfPositiveNumbers must have keys a sum and a count', () => {
        // Три способа:

        app.functions.getSumOfPositiveNumbers(arr).should.have.all.keys('sum', 'count');
        expect(app.functions.getSumOfPositiveNumbers(arr)).to.have.all.keys('sum', 'count');
        assert.hasAllKeys(app.functions.getSumOfPositiveNumbers(arr), ['sum', 'count']);
    });

    it('getSumOfPositiveNumbers should not have sam keys and cou and s ans c', () => {
        // Три способа:

        assert.doesNotHaveAnyKeys(app.functions.getSumOfPositiveNumbers(arr), ['sam', 'cou', 's', 'c']);
        expect(app.functions.getSumOfPositiveNumbers(arr)).to.not.have.any.keys('sam', 'cou', 's', 'c');
        app.functions.getSumOfPositiveNumbers(arr).should.not.have.any.keys('sam', 'cou', 's', 'c');
    });

    it('getSumOfPositiveNumbers should be error (The entered data is not an array)', () => {
        // Два способа:

        expect(function () { app.functions.getSumOfPositiveNumbers({}) }).to.throw("Входные данные не являются массивом");
        (function () { app.functions.getSumOfPositiveNumbers({}) }).should.throw("Входные данные не являются массивом");
    });

    it('getSumOfPositiveNumbers should be error (The entered data is not an array)', () => {
        // Два способа:

        expect(function () { app.functions.getSumOfPositiveNumbers('abs') }).to.throw("Входные данные не являются массивом");
        (function () { app.functions.getSumOfPositiveNumbers('abs') }).should.throw("Входные данные не являются массивом");
    });

    it('getSumOfPositiveNumbers should be error (The entered data is not an array)', () => {
        // Два способа:

        expect(function () { app.functions.getSumOfPositiveNumbers(123) }).to.throw("Входные данные не являются массивом");
        (function () { app.functions.getSumOfPositiveNumbers(123) }).should.throw("Входные данные не являются массивом");
    });
});


// Первый эксперимент
describe('sayHello', () => {
    it('Вернет Hello', () => {
        assert.equal(app.functions.sayHello(), 'Hello');
    });

    it('sayHello should return type string', () => {
        assert.typeOf(app.functions.sayHello(), 'string');
    });
});

describe('addNumber', () => {
    it('addNumber should be 10', () => {
        assert.equal(app.functions.addNumber(5, 5), 10);
    });

    it('addNumber should return type number', () => {
        assert.typeOf(app.functions.addNumber(), 'number');
    });

    it('addNumber should be above 9', () => {
        assert.isAbove(app.functions.addNumber(5, 5), 9);
    });
});