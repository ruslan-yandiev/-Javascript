const app = require('../app2');
const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();

// Заметка для себя. по сути should упрощенный вариант expect. При should вызывается автматом expect и to в данном DSL

const Text = 'Lorem ipsum dolor sit amet.'
const MyFunction = app.functions.showWordandSum

describe('conversionText', () => {

    it('conversionText should be object', () => {
        // Четыре способа:

        assert.isArray(app.functions.conversionText(Text, MyFunction));
        assert.typeOf(app.functions.conversionText(Text, MyFunction), 'array');
        expect(app.functions.conversionText(Text, MyFunction)).to.be.an('array');
        app.functions.conversionText(Text, MyFunction).should.be.a('array');
    });

    it('Array length should be 5', () => {
        // Три способа:

        app.functions.conversionText(Text, MyFunction).length.should.equal(5);
        expect(app.functions.conversionText(Text, MyFunction).length).to.equal(5);
        assert.equal(app.functions.conversionText(Text, MyFunction).length, 5);
    });

    it('Key word return Lorem', () => {
        // Три способа:

        app.functions.conversionText(Text, MyFunction)[0]['word'].should.equal("Lorem");
        expect(app.functions.conversionText(Text, MyFunction)[0]['word']).to.equal("Lorem");
        assert.equal(app.functions.conversionText(Text, MyFunction)[0]['word'], "Lorem");
    });

    it('Array[0] return { word: "Lorem", sum: 511 }', () => {
        // Семь способов (строгое сравнение):

        assert.deepEqual(app.functions.conversionText(Text, MyFunction)[0], { word: "Lorem", sum: 511 });
        app.functions.conversionText(Text, MyFunction)[0].should.include({ word: "Lorem", sum: 511 });
        expect(app.functions.conversionText(Text, MyFunction)[0]).to.include({ word: "Lorem", sum: 511 });
        expect(app.functions.conversionText(Text, MyFunction)[0]).to.deep.equal({ word: "Lorem", sum: 511 });
        app.functions.conversionText(Text, MyFunction)[0].should.deep.equal({ word: "Lorem", sum: 511 });
        expect(app.functions.conversionText(Text, MyFunction)[0]).to.deep.include({ word: "Lorem", sum: 511 });
        app.functions.conversionText(Text, MyFunction)[0].should.deep.include({ word: "Lorem", sum: 511 });
    });

    it('conversionText include {}', () => {
        // Два способа:

        app.functions.conversionText(Text, MyFunction)[0].should.include({});
        expect(app.functions.conversionText(Text, MyFunction)[0]).to.include({});
    });

    it('Object must have keys a sum and a word', () => {
        // Три способа:

        app.functions.conversionText(Text, MyFunction)[1].should.have.all.keys('sum', 'word');
        expect(app.functions.conversionText(Text, MyFunction)[1]).to.have.all.keys('sum', 'word');
        assert.hasAllKeys(app.functions.conversionText(Text, MyFunction)[1], ['sum', 'word']);
    });

    it('conversionText should be error (The entered data is not an string)', () => {
        // Два способа:

        expect(function () { app.functions.conversionText(123, MyFunction) }).to.throw("Входные данные не являются строкой");
        (function () { app.functions.conversionText(123, MyFunction) }).should.throw("Входные данные не являются строкой");
    });

    it('conversionText should be error (The entered data is not an function)', () => {
        // Два способа:

        expect(function () { app.functions.conversionText(Text, 123) }).to.throw("Входные данные не являются функцией");
        (function () { app.functions.conversionText(Text, 123) }).should.throw("Входные данные не являются функцией");
    });
});

describe('showWordandSum', () => {
    let arr = 'abc'

    it('showWordandSum should be error (The entered data is not an array)', () => {
        // Два способа:

        expect(function () {
            if (typeof arr !== 'array') throw new Error('Входные данные не являются массивом');
            app.functions.MyFunction(arr) }).to.throw("Входные данные не являются массивом");

        (function () { 
            if (typeof arr !== 'array') throw new Error('Входные данные не являются массивом');
            app.functions.MyFunction(arr) }).should.throw("Входные данные не являются массивом");
    });

    it('showWordandSum should be object', () => {
        // Четыре способа:

        assert.isArray(app.functions.conversionText(Text, MyFunction));
        assert.typeOf(app.functions.conversionText(Text, MyFunction), 'array');
        expect(app.functions.conversionText(Text, MyFunction)).to.be.an('array');
        app.functions.conversionText(Text, MyFunction).should.be.a('array');
    });

    it('Array length should be 5', () => {
        // Три способа:

        app.functions.conversionText(Text, MyFunction).length.should.equal(5);
        expect(app.functions.conversionText(Text, MyFunction).length).to.equal(5);
        assert.equal(app.functions.conversionText(Text, MyFunction).length, 5);
    });

    it('Key word return Lorem', () => {
        // Три способа:

        app.functions.conversionText(Text, MyFunction)[0]['word'].should.equal("Lorem");
        expect(app.functions.conversionText(Text, MyFunction)[0]['word']).to.equal("Lorem");
        assert.equal(app.functions.conversionText(Text, MyFunction)[0]['word'], "Lorem");
    });

    // ...
});