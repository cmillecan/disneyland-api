import React, {useEffect, useState} from 'react'
import './LandList.css'
import Client from '../client'
import LandDisplay from "./LandDisplay";

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
            const timeout = setTimeout(() => {
                setDebouncedValue(value)
            }, delay)

            return () => {
                clearTimeout(timeout)
            }
        },
        [value]
    )

    return debouncedValue
}

function LandList() {
    const [lands, setLands] = useState([])
    const [query, setQuery] = useState("")
    const client = new Client()
    useEffect(() => {
        client.getLands().then(lands => {
            console.log("lands is: ", lands)
            setLands(lands)
        })
    }, [])

    const debouncedQuery = useDebounce(query, 500)
    useEffect(() => {
        client.search(debouncedQuery).then(results => setLands(results))
    }, [debouncedQuery])

    const landDisplays = lands.map(({name, date}) => <LandDisplay name={name} date={date} />)

    return(
        <div className='display-container'>
            <div className='search-container'>
                <label>Search for Land or Attraction</label>
                <div className='search-bar'>
                    <input
                        type='text'
                        placeholder='i.e. Adventureland, Fantasyland, Tomorrowland'
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <button>Go!</button>
                </div>
            </div>
            <div className='lands-display-container'>
                <div className='lands-info-display'>
                {landDisplays && landDisplays}
            </div>
            </div>
        </div>
    );
}

export default LandList;
