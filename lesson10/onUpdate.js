'use strict'

function onUpdate(event) {
    const gifName = event.target.value;

    if (collectionGifUrl[gifName]) {
        tagging.showImg(collectionGifUrl[gifName]);
    } else {
        startRequest(gifName);
    }
};
