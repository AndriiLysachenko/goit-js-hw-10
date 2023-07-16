export function fetchBreeds() {

    const x_api_key = "live_Ecqzh4XCNIutO5rLZZ9lu2j4NBjhqilIl1vddoxx9m8duJamZVQ7Eg7EoVcRvEUW";
    const url = 'https://api.thecatapi.com/v1/breeds';

    return fetch(`${url}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json()
        });
};

export function fetchCatByBreed(breedId) {
    const x_api_key = "live_Ecqzh4XCNIutO5rLZZ9lu2j4NBjhqilIl1vddoxx9m8duJamZVQ7Eg7EoVcRvEUW";
    const base_url = 'https://api.thecatapi.com/v1';
    return fetch(`${base_url}/images/search?breed_ids=${breedId}&api_key=${x_api_key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json()
        });
}