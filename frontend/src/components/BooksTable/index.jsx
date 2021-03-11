import React, { useState } from 'react'
import './BooksTable.scss'

function BooksTable({books, title, maxBooks}) {
    books.sort((a, b) => parseFloat(b.attributes.copiesSold) - parseFloat(a.attributes.copiesSold));

    const [displayedBooks, setDisplayedBooks] = useState(books)

    if (books.length > maxBooks) {
        const booksToRemove = maxBooks - books.length
        const reducedBooks = books.pop(booksToRemove)

        setDisplayedBooks(reducedBooks)
    }

    return (
        <table className="books-table">
            <thead>
                <tr>
                    <td>
                        <h3>{title}</h3>
                    </td>
                </tr>
            </thead>
            <tbody>
                {books?.map((book) => (
                    <tr key={book.id}>
                        <td>
                            {book.attributes.name}
                        </td>
                        <td>
                            {book.attributes.author}
                        </td>
                    </tr>
            ))}
            {books.length === 0 && (
                <tr>
                    <td>
                        No data available
                    </td>
                    <td></td>
                </tr>
            )}
            </tbody>
        </table>
    )
}

export default BooksTable
