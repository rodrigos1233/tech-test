import React from 'react'
import BookStore from './../../components/BookStore'
import './Home.scss'

const bookStores = [
    {
        id: 1,
        name: 'book store 1',
        image: 'https://i.pinimg.com/736x/51/a2/47/51a247e0d1785b89b70a17a1c8f31ac5--melbourne-australia-second-hand.jpg',
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
    },
    {
        id: 2,
        name: 'book store 2',
        image: 'https://i.pinimg.com/736x/51/a2/47/51a247e0d1785b89b70a17a1c8f31ac5--melbourne-australia-second-hand.jpg',
        establishmentDate: '1994-02-09T00:00:00+0000',
        website:'https://www.micro-books-store.com',
        rating: 2,
        country: 'SE',
        books: []
    },
]

function Home() {
    return (
        <div className="bookstores">
            <h1>Book Stores</h1>
            {bookStores?.map((bookStore) => (
                <BookStore
                    key={bookStore.id}
                    bookStore={bookStore}
                />
            ))}
        </div>
    )
}

export default Home
