import React, { useState, useEffect } from 'react'
import BookStore from './../../components/BookStore'
import './Home.scss'

function Home() {
    const fetchStoresDataUrl = 'http://localhost:3000/stores'
    const fetchBooksDataUrl = 'http://localhost:3000/books'
    const fetchAuthorsDataUrl = 'http://localhost:3000/authors'
    const fetchCountriesDataUrl = 'http://localhost:3000/countries'

    const [jsonStores, setJsonStores] = useState([]);
    const [jsonBooks, setJsonBooks] = useState([]);
    const [jsonAuthors, setJsonAuthors] = useState([]);
    const [jsonCountries, setJsonCountries] = useState([]);

    useEffect(() => {
        const fetchStores = async () => {
            fetch(fetchStoresDataUrl)
            .then(response => response.json())
            .then((jsonData) => {
                setJsonStores(jsonData.data);
            })
        };

        fetchStores()
    }, []);

    useEffect(() => {
        const fetchBooks = async () => {
            fetch(fetchBooksDataUrl)
            .then(response => response.json())
            .then((jsonData) => {
                setJsonBooks(jsonData.data);
            })
        };

        fetchBooks()
    }, []);

    useEffect(() => {
        const fetchAuhtors = async () => {
            fetch(fetchAuthorsDataUrl)
            .then(response => response.json())
            .then((jsonData) => {
                setJsonAuthors(jsonData.data);
            })
        };

        fetchAuhtors()
    }, []);

    useEffect(() => {
        const fetchCountries = async () => {
            fetch(fetchCountriesDataUrl)
            .then(response => response.json())
            .then((jsonData) => {
                setJsonCountries(jsonData.data);
            })
        };

        fetchCountries()
    }, []);

    const books = jsonBooks
    const stores = jsonStores

    books.forEach(book => {
        const authorId = book.relationships.author.data.id
        const author = jsonAuthors.filter(jsonAuthor => jsonAuthor.id === authorId)
        book.attributes.author = (author[0] ? author[0].attributes.fullName : null)
    })

    stores.forEach(store => {
        const bookIds = store.relationships.books?.data ? store.relationships.books?.data?.map(book => book.id) : []
        const storesBooks = []

        bookIds.forEach(bookId => {
            storesBooks.push(...books.filter(book => book.id === bookId))
        })

        store.attributes.books = (storesBooks ? storesBooks : [])

        const countryId = store.relationships.countries.data.id
        const country = jsonCountries.filter(jsonCountry => jsonCountry.id === countryId)
        store.attributes.country = country[0]?.attributes?.code
    })

    return (
        <div className="bookstores">
            <h1>Book Stores</h1>
            {stores?.map((bookStore) => (
                <BookStore
                    key={bookStore.id}
                    attributes={bookStore.attributes}
                    id={bookStore.id}
                />
            ))}
        </div>
    )
}

export default Home
