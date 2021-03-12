const FETCH_STORES_DATA_URL = 'http://localhost:3000/stores'
const FETCH_BOOKS_DATA_URL = 'http://localhost:3000/books'
const FETCH_AUTHORS_DATA_URL = 'http://localhost:3000/authors'
const FETCH_COUNTRIES_DATA_URL = 'http://localhost:3000/countries'

export const fetchStores = async () => {
    const storesData = await fetch(FETCH_STORES_DATA_URL)
    const stores = await storesData.json()
    return stores.data
};

export const fetchBooks = async () => {
    const booksData = await fetch(FETCH_BOOKS_DATA_URL)
    const books = await booksData.json()
    return books.data
};

export const fetchAuthors = async () => {
    const authorsData = await fetch(FETCH_AUTHORS_DATA_URL)
    const authors = await authorsData.json()
    return authors.data
};

export const fetchCountries = async () => {
    const countriesData = await fetch(FETCH_COUNTRIES_DATA_URL)
    const countries = await countriesData.json()
    return countries.data
};

export const fetchCountry = async (countryCode) => {
    const countryData = await fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode?.toLowerCase()}?fields=name;flag`)
    const country = await countryData.json()
    return country
};
