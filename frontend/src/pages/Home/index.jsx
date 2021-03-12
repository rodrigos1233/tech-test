import React, { useState, useEffect } from 'react'
import BookStore from './../../components/BookStore'
import {fetchStores, fetchBooks, fetchAuthors, fetchCountries} from '../../utils/data'
import './Home.scss'

const SORTING_OPTIONS = [
    {
        name: 'Alphabetical',
        sortFn: (a, b) => a.attributes.name.localeCompare(b.attributes.name)
    },
    {
        name: 'By date',
        sortFn: (a, b) => new Date(b.attributes.establishmentDate) - new Date(a.attributes.establishmentDate)
    },
    {
        name: 'By rating',
        sortFn: (a, b) => b.attributes.rating - a.attributes.rating
    },
]
    
function Home() {

    const [stores, setStores] = useState([]);
    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [countries, setCountries] = useState([]);

    const [sortStoresOption, setSortStoresOption] = useState('Alphabetical')

    useEffect(async() => {
        const [stores, books, authors, countries] = await Promise.all([
            fetchStores(),
            fetchBooks(),
            fetchAuthors(),
            fetchCountries(),
        ])

        setStores(stores)
        setBooks(books)
        setAuthors(authors)
        setCountries(countries)
    }, [])

    

    books.forEach(book => {
        const authorId = book.relationships.author.data.id
        const author = authors.filter(author => author.id === authorId)
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
        const country = countries.filter(country => country.id === countryId)
        store.attributes.country = country[0]?.attributes?.code
    })

    const sortOption = SORTING_OPTIONS.find(({ name }) => name === sortStoresOption);
    if (sortOption) {
        stores.sort(sortOption.sortFn);
    }

    return (
        <div className="bookstores">
            <h1>Book Stores</h1>
            <select onChange={e => setSortStoresOption(e.currentTarget.value)}>
                {SORTING_OPTIONS.map(({ name }) => (
                    <option
                        key={name}
                        value={name}
                    >
                        {name}
                    </option>
                ))}
            </select>
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