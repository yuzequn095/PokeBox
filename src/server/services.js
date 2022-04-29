export function fetchPokemons(url) {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    })
    .then(
        () => fetch(url, {
            method: 'GET',
        })
    )
    .catch( () => Promise.reject('networkError'))
    .then( response => {
        if(response.ok) {
            return response.json();
        }
        return Promise.reject('serviceError');
    });
}

export function fetchSinglePokemon(url) {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    })
    .then(
        () => fetch(url, {
            method: 'GET',
        })
    )
    .catch( () => Promise.reject('networkError'))
    .then( response => {
        if(response.ok) {
            return response.json();
        }
        return Promise.reject('serviceError');
    });
}