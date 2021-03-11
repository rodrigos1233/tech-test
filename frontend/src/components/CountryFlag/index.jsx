import React, { useState } from 'react'
import './CountryFlag.scss'

function CountryFlag({country}) {
    const [countryFlag, setCountryFlag] = useState('')
    const [countryName, setCountryName] = useState('')

    const fetchCountryUrl = `https://restcountries.eu/rest/v2/alpha/${country?.toLowerCase()}?fields=name;flag`

    fetch(fetchCountryUrl)
    .then(response => response.json())
    .then((jsonData) => {
      setCountryFlag(jsonData.flag)
      setCountryName(jsonData.name)
    })
    
    return (
        <img 
            src={countryFlag} 
            alt={countryName}
            className="country-flag"
        />
    )
}

export default CountryFlag
