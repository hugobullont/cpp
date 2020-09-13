
const API_URL = "http://localhost:3010/";

const getWhiteCards = async () => {
    let response = await fetch(API_URL + 'WhiteCards/10', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    let responseJson = await response.json();
    return responseJson;
}

module.exports.getWhiteCards = getWhiteCards;