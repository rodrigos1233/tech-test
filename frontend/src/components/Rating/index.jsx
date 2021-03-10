import React, { useState } from 'react'
import Star from '../../assets/icons/star.svg'
import YellowStar from '../../assets/icons/yellow-star.svg'
import './Rating.scss'

function Rating({rating}) {

    const [updatedRating, setUpsatedRating] = useState(rating)

    function handleClick(k) {
        setUpsatedRating(k)
    }

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
