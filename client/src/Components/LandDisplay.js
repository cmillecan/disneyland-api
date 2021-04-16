import React from 'react'
import './LandDisplay.css'

function LandDisplay({name, date}) {
    return (
        <div className='land-info'>
            <h1>{name}</h1>
            {/*TODO: format date better using https://date-fns.org/*/}
            <p>Opening Date: {date.toString()}</p>
            <div className='attraction-list'>
                <h2>Attractions: COMING SOON</h2>
            </div>
        </div>
    )
}

export default LandDisplay;