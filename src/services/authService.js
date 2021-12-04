const baseUrl = 'http://localhost:3030';

// export const login = (email, password) => {
//     return fetch(`${baseUrl}/users/login`, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify({email, password})
//     })
//         .then(response => response.json());
// };

export const login = async (email, password) => {
    let response = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    let result = await response.json();

    if (response.ok) {
        return result;
    }
    throw result.message;
};



export const register = (email, password) => {
    return fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
        .then(response => response.json());
};


export const logout = (token) => {
    return fetch(`${baseUrl}/users/logout`, {
        headers: {
            'X-Authorization': token
        },
    });
};

export const getUser = () => {
    let username = localStorage.getItem('username');
    return username;
};

export const isAuthenticated = () => {
    return Boolean(getUser());
};