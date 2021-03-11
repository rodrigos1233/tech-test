import React, { useState, useEffect } from 'react'
import BookStore from './../../components/BookStore'
import './Home.scss'

const bookStores = [
    {
        id: 1,
        attributes: {
            name: 'book store 1',
            storeImage: 'https://i.pinimg.com/736x/51/a2/47/51a247e0d1785b89b70a17a1c8f31ac5--melbourne-australia-second-hand.jpg',
            establishmentDate: '1995-02-09T00:00:00+0000',
            website:'https://www.micro-books-store.com',
            rating: 4,
            country: 'CH',
            books: [
                {
                    copiesSold: 47,
                    author: 'Ivelin Demirov',
                    id: 4,
                    name: 'Canvas Pocket Reference: Scripted Graphics for HTML5',
                },
                {
                    copiesSold: 27,
                    author: 'Ivelin Demirov',
                    id: 5,
                    name: 'Canvas Pocket Reference: HTML5',
                },
                {
                    copiesSold: 147,
                    author: 'Ivelin Demirov',
                    id: 6,
                    name: 'Canvas: Graphics',
                },

            ]
        }
    },
    {
        id: 2,
        attributes: {
            name: 'book store 2',
            storeImage: 'https://i.pinimg.com/736x/51/a2/47/51a247e0d1785b89b70a17a1c8f31ac5--melbourne-australia-second-hand.jpg',
            establishmentDate: '1994-02-09T00:00:00+0000',
            website:'https://www.micro-books-store.com',
            rating: 2,
            country: 'SE',
            books: []
        }
    },
]

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
            storesBooks.push(books.filter(book => book.id === bookId))
        })

        store.attributes.books = (storesBooks ? storesBooks : [])

        const countryId = store.relationships.countries.data.id
        const country = jsonCountries.filter(jsonCountry => jsonCountry.id === countryId)
        store.attributes.country = country[0]?.attributes?.code

        console.log(store)

        
    })







    return (
        <div className="bookstores">
            <h1>Book Stores</h1>
            {stores?.map((bookStore) => (
                <BookStore
                    key={bookStore.id}
                    attributes={bookStore.attributes}
                />
            ))}
        </div>
    )
}

export default Home
