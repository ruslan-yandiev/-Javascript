'use strict'

async function startRequest(gifName) {
    const apiUrl = 'https://api.giphy.com/v1/gifs/search';
    const key = 'Shl6gOSK0yopdxfo32WhAIAD1xpBwXkp';

    try {
        let response = await getGif(`${apiUrl}?api_key=${key}&q=${gifName}&limit=1`, gifName);

        tagging.showImg(response);
    } catch (error) {
        tagging.showError(error);
        console.log(error);
    }
};
