import React, {useEffect, useState} from 'react'
import './LandList.css'
import Client from '../client'
import LandDisplay from "./LandDisplay";

function LandList() {
    const [lands, setLands] = useState([])
    const [query, setQuery] = useState("")
    useEffect(() => {
        const client = new Client()
        client.getLands().then(lands => {
            console.log("lands is: ", lands)
            setLands(lands)
        })
    }, [])

    useEffect(() => {
        const client = new Client()
        client.search(query).then(results => setLands(results))
    }, [query])

    const landDisplays = lands.map(({name, date}) => <LandDisplay name={name} date={date} />)
    console.log('landDisplays is: ', landDisplays)
    return(
        <div className='display-container'>
            <div className='search-container'>
                <label>Search for Land or Attraction</label>
                <div className='search-bar'>
                    <input
                        type='text'
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <button>Go!</button>
                </div>
            </div>
            {landDisplays && landDisplays}
        </div>
    );
}

export default LandList;
