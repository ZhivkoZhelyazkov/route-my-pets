// export const login = (email, password) => {
//     return fetch('http://localhost:3030/users/login', {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify({email, password})
//     })
//         .then(response => response.json());
// };

export const login = async (email, password) => {
    let response = await fetch('http://localhost:3030/users/login', {
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




export const logout = () => {
    localStorage.removeItem('username');
};

export const getUser = () => {
    let username = localStorage.getItem('username');
    return username;
};

export const isAuthenticated = () => {
    return Boolean(getUser());
};