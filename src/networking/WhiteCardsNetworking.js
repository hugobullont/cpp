
const API_URL = "http://localhost:3000/";

const getWhiteCards = async () => {
    let response = await fetch(API_URL + 'whiteCards', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    let responseJson = await response.json();
    return responseJson;
}

module.exports.getWhiteCards = getWhiteCards;