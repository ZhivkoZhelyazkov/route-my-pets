import * as request from './requester';


const baseUrl = 'http://my-softuni-custom-server.herokuapp.com/data';
// const baseUrl = 'http://localhost:3030/data';


export const getAll = () => request.get(`${baseUrl}/pets`);

export const getMyPets = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`);

    return request.get(`${baseUrl}/pets?where=${query}`);
};

export const create = async (petData, token) => {
    let response = await fetch(`${baseUrl}/pets`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ ...petData, likes: [] })
    });

    let result = await response.json();
    return result;
};

export const update = (petId, petData) => request.put(`${baseUrl}/pets/${petId}`, petData);

export const getOne = (petId, signal) => {
    return fetch(`${baseUrl}/pets/${petId}`, {signal})
        .then(response => response.json());
};

export const destroy = (petId, token) => {
    return fetch(`${baseUrl}/pets/${petId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        },
    })
        .then(response => response.json());
};

export const like = (petId, pet, token) => {
    return fetch(`${baseUrl}/pets/${petId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(pet)
    })
        .then(response => response.json());
};

