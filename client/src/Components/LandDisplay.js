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
      <div className='attractions'>
        <div className='attractions-list'>
          <p>{attractions}</p>
        </div>
      </div>
      <div className='attractions-title'>
        <h2>Attractions</h2>
      </div>
    </div>
  )
}

export default LandDisplay;