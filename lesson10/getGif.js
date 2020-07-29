'use strict'

async function getGif(url, gifName) {
    try {
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error(error)
        };

        response = await response.json();
        response = response.data[0].images.fixed_height.url
        collectionGifUrl[gifName] = response

        return response
    } catch (error) {
        throw new Error('Не удалось получить данные');
    }
};
