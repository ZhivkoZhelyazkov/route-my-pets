export const request = (url) => {
    return fetch(url)
            .then(responseHandler);
};


async function responseHandler(response) {
    let jsonData = await response.json();

    if (response.ok) {
        return Object.values(jsonData);
    } else {
        throw jsonData;
    }
}