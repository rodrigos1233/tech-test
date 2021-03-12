import React, { useState, useEffect } from 'react'
import {fetchCountry} from '../../utils/data'
import './CountryFlag.scss'

function CountryFlag({countryCode}) {
    const [countryFlag, setCountryFlag] = useState('')
    const [countryName, setCountryName] = useState('')

    useEffect(async() => {
        if (countryCode) {
            const {name, flag} = await fetchCountry(countryCode)
            setCountryFlag(flag)
            setCountryName(name)
        }
    }, [countryCode])

    
    return (
        <img 
            src={countryFlag} 
            alt={countryName}
            className="country-flag"
        />
    )
}

export default CountryFlag
