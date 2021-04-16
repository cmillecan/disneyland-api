import React from 'react'
import './HeroImage.css'
import castle from '../images/disneyapi.svg'

function HeroImage() {

    return (
        <div className='header-container'>
            <img src={castle} className='castle' alt='castle'/>
        </div>
    )
}

export default HeroImage;
