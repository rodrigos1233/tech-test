import React from 'react'
import Star from '../../assets/icons/star.svg'
import YellowStar from '../../assets/icons/yellow-star.svg'
import './Rating.scss'

function Rating({rating}) {

    return (
        <div className="rating-stars">
            {Array.from({ length: 5 }, (_, k) => (
                <img
                    key={k}
                    src={k >= rating ? Star : YellowStar}
                />
            ))}

        </div>
    )
}

export default Rating
