'use strict'
class CustomPromise {
    constructor(callback) {
        this.__success__ = []
        this.__error__ = []
        this._callback = callback
        this._status = 'pending'

        if (callback) {
            setTimeout(() => {
                callback(this._resolve.bind(this), this._reject.bind(this))
            }, 0)
        }
    }

    then(successCb, rejectCb) {
        if (successCb) {
            this.__success__.push(successCb)
        }

        if (rejectCb) {
            this.__error__.push(rejectCb)
        }

        if (this._status === 'fulfilled') {
            this.__success__.forEach(cb => cb(this.result));
            this.__success__ = [];
        };

        if (this._status === 'rejected') {
            this.__error__.forEach(cb => cb(this.result));
            this.__error__ = [];
        };

        return this;
    }

    catch (rejectCb) {
        this.then(null, rejectCb)
    }

    _resolve(result) {
        this.__success__.forEach(cb => cb(result));
        this._status = 'fulfilled';
    }

    _reject(err) {
        this.__error__.forEach(cb => cb(err));
        this._status = 'rejected';
    }

    static resolve(result) {
        const promise = new CustomPromise();
        promise.result = result;
        promise._resolve(result);
        return promise;
    }

    static reject(err) {
        const promise = new CustomPromise();
        promise.result = err;
        promise._reject(err);
        return promise;
    }
};


const promise = new CustomPromise((resolve, reject) => {
    resolve({ promis: 'this is a promise'});

    setTimeout(() => {
        reject('Ошибочка')
    }, 1000)
});

promise.then(console.log('Hi')).then(console.log(1986)).then(obj => console.log('MyPrpmise:', obj)).then(title => console.log(title.promis));
promise.catch((err) => {
    console.log('Rejected', err)
});

const promise2 = new CustomPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(123)
    }, 1000)
});

promise2.then((resolve) => {
    console.log('Result', resolve)
}).then(console.log);

const promise4 = CustomPromise.resolve(777);
promise4.then(i => console.log(i));

const promise5 = CustomPromise.reject('Ошибка промиса5');
promise5.catch(err => console.log(err));