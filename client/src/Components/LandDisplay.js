import React from 'react'
import './LandDisplay.css'
import { format } from 'date-fns'

function LandDisplay({name, date, attractions}) {
  const newDate = new Date(date)
  const formattedDate = format(newDate, 'MMMM d, yyyy')

    return (
        <div className='land-ticket'>
            <div className='land'>
                <h1>{name}</h1>
                <p>Opening Date: {formattedDate}</p>
            </div>
            <div className='attraction'>
                <div className='attraction-list'>
                    <h2>Attractions:</h2>
                    <p>{attractions}</p>
                </div>
            </div>
        </div>
    )
}

export default LandDisplay;