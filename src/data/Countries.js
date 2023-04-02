import {useEffect, useState} from 'react';
const url = 'https://restcountries.com/v3.1/all'

const Countries = () => {
    const [countries, setCountries] = useState([])
    async function fetchCountriesData () {
        const response = await fetch(url)
        const countries = await response.json()
        setCountries(countries)
        console.log(countries)
    }

    useEffect(() => {
        fetchCountriesData().then(r => console.log(r)).catch(error => console.error(error))
    }, [])

    return countries.map((country) => country.name.common)
};

export default Countries;