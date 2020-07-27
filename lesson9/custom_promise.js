'use strict'

const CustomPromise = function (callback) {
    this.__success__ = [];
    this.__error__ = [];
    this._callback = callback;

    this.then = function (successCb, rejectCb) {
        if (successCb) {
            this.__success__.push(successCb)
        }
        if (rejectCb) {
            this.__error__.push(rejectCb)
        }
    }

    this.catch = function (rejectCb) {
        this.then(null, rejectCb)
    }

    this._resolve = function (result) {
        this.__success__.forEach(cb => cb(result))
    }

    this._reject = function (err) {
        this.__error__.forEach(cb => cb(err))
    }

    setTimeout(() => {
        callback(this._resolve.bind(this), this._reject.bind(this))
    }, 0)
};

let promise = new CustomPromise((resolve, reject) => {
    setTimeout(() => {
        reject(1)
    }, 1000)
});

promise.then(console.log('Hi'));
promise.catch((err) => {
    console.log('Rejected', err)
});

let promise2 = new CustomPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(123)
    }, 1000)
});

promise2.then((resolve) => {
    console.log('Result', resolve)
});

promise2.then(console.log);

