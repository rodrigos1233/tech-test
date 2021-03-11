import React, { useState } from 'react'
import Star from '../../assets/icons/star.svg'
import YellowStar from '../../assets/icons/yellow-star.svg'
import './Rating.scss'

function Rating({rating, id}) {
    const fetchStoreDataUrl = `http://localhost:3000/stores/${id}`

    const [updatedRating, setUpdatedRating] = useState(rating)

    function handleClick(k) {
        setUpdatedRating(k)
        fetch(fetchStoreDataUrl, {
            method: 'PATCH',
            headers: {'Content-type': 'application/vnd.api+json'},
            body: JSON.stringify({
                data: {
                    id: id,
                    type: "stores",
                    attributes: {
                        rating: k,
                    }
                }
            })
        }
    )}

    return (
        <div className="rating-stars">
            {Array.from({ length: 5 }, (_, k) => (
                <img
                    key={k}
                    src={k >= updatedRating ? Star : YellowStar}
                    onClick={() => handleClick(k + 1)}
                />
            ))}

        </div>
    )
}

export default Rating
