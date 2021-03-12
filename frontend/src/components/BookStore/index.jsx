import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Rating from "../Rating";
import CountryFlag from "../CountryFlag";
import './BookStore.scss'
import BooksTable from '../BooksTable';

function BookStore({attributes, id}) {

    const {name, storeImage, establishmentDate, website, rating, country, books} = attributes

    const date = new Date(establishmentDate.toString())

    const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`

    return (
        <div className="bookstore-card">
            <div className="bookstore-card__main">
                <div 
                    className="bookstore-card__main__image"
                    style={{backgroundImage: `url(${storeImage})`}}    
                />
                <div className="bookstore-card__main__info">
                    <div className="bookstore-card__main__info__header">
                        <h2>{name}</h2>
                        <Rating 
                            rating={rating} 
                            id={id}
                        />
                    </div>
                    <BooksTable 
                        books={books} 
                        title="Best selling books" 
                        maxBooks={2} 
                    />
                </div>
            </div>
            <div className="bookstore-card__footer">
                <p>{`${formattedDate} - `}<a href={website}>{website}</a></p>
                <CountryFlag countryCode={country} />
            </div>
        
        </div>
    )
}

export default BookStore
