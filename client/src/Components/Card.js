import React, {useEffect, useState} from 'react';
import './Card.css'
import Client from '../client'

function DisplayCard() {
    const [lands, setLands] = useState([])
    useEffect(() => {
        // if no dependencies are provided then this function will run the FIRST time this component loads (only once!)
        const client = new Client()
        client.getLands().then(lands => {
            console.log("lands is: ", lands)
            setLands(lands)
        })
    }, [])

    const landDisplays = lands.map(({name, date}) => <LandDisplay name={name} date={date} />)
    // longer method:
    // const landDisplays = lands.map((land) => {
    //     return <LandDisplay name={land.name} date={land.date} />
    // })

    return(
        <div className='display-container'>
            <label>Search for Land or Attraction</label>
            <div className='search-bar'>
                <input type='text' />
                <button>Go!</button>
            </div>
            {landDisplays && landDisplays}
            <div className='lands-display'>

            </div>
        </div>
    );
}

function LandDisplay({name, date}) {
    return (
        <div className='land-info'>
            <h2>{name}</h2>

            
            {/*TODO: format date better using https://date-fns.org/*/}
            Opening Date: {date.toString()}
            <div className='attraction-list'>
                <h3>Attractions: COMING SOON</h3>
                <p>Jungle Cruise</p>
                <p>The Enchanted Tiki Room</p>
                <p>Indiana Jones Adventure</p>
            </div>
        </div>
    )
}

export default DisplayCard;
