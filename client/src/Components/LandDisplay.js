import React from 'react'
import './LandDisplay.css'

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

export default LandDisplay;