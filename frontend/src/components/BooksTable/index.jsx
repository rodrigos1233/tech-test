import React from 'react'
import './BooksTable.scss'

function BooksTable({books, title}) {

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
                            {book.name}
                        </td>
                        <td>
                            {book.author}
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
