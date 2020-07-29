'use strict'

let tagging = {
    showImg(url) {
        img.src = url;
    },
    showError(error) {
        document.querySelector('.error').innerHTML = `${error}`;
    }
};
